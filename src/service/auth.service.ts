import bcrypt from "bcrypt";

import { User } from "../interfaces/user.interface";

import { getUserByEmail } from "./user.service";
import { sign, verify } from "jsonwebtoken";
import config from "../config";

export async function login(body: Pick<User, "email" | "password">) {
  const existingUser = getUserByEmail(body.email);

  if (!existingUser) {
    return {
      error: "Invalid email or password",
    };
  }
  const isValidPassword = await bcrypt.compare(
    body.password,
    existingUser.password
  );

  if (!isValidPassword) {
    return {
      error: "Invalid email or password",
    };
  }

  const payload = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    permissions: existingUser.permissions,
  };

  const accessToken = await sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.accessTokenExpiryMS,
  });

  const refreshToken = await sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.refreshTokenExpiryMS,
  });

  return {
    accessToken,
    refreshToken,
  };
}

export async function refresh(refreshToken: string) {
  const decoded = await verify(refreshToken, config.jwt.secret!);
  const { id, name, email } = decoded as User;

  const payload = { id, name, email };

  const newAccessToken = await sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.accessTokenExpiryMS,
  });
  return {
    accessToken: newAccessToken,
  };
}