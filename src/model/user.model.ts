import { GetUserQuery, User } from "../interfaces/user.interface";

const users: User[] = [ 
  {
    id: "1",
    name: "Kalash",
    email: "kalash@gmail.com",
    password: "$2b$10$I24gdNea7i6fSXPl1uy96.cle9N5v6Zt8HyZTkTpFhD.kwzHeBHNW",
    permissions:["users.get"],
  },
];

export function getUserById(id: string) {
  return users.find(({ id: userId }) => userId === id);
}

export function createUser(user: User) {
  return users.push({
    ...user,
    id: `${users.length + 1}`,
  });
}

export function getUsers(query: GetUserQuery) {
  const { q } = query;
  if (q) {
    return users.filter(({ name }) => name.includes(q));
  }
  return users;
}

export function getUserByEmail(email: string) {
  return users.find(({ email: userEmail }) => userEmail === email);
}
