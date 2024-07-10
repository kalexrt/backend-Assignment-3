import { getUserQuery, User } from "../interfaces/user.interface";

let users: User[] = [ 
  {
    id: "1",
    name: "Kalash",
    email: "kalash1@gmail.com",
    password: "$2b$10$I24gdNea7i6fSXPl1uy96.cle9N5v6Zt8HyZTkTpFhD.kwzHeBHNW",
    permissions:["users.getAll","users.create","users.getById","users.updateById","users.deleteById"],
  },
  {
    id: "2",
    name: "Kalash",
    email: "kalash2@gmail.com",
    password: "$2b$10$I24gdNea7i6fSXPl1uy96.cle9N5v6Zt8HyZTkTpFhD.kwzHeBHNW",
    permissions:[],
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

export function getUsers(query: getUserQuery) {
  const { q } = query;
  if (q) {
    return users.filter(({ name }) => name.includes(q));
  }
  return users;
}

export function getUserByEmail(email: string) {
  return users.find(({ email: userEmail }) => userEmail === email);
}

export function deleteUserById(id:number){
  users = users.filter(user => parseInt(user.id) !== id);
  return {message: `user${id} is delted`}
}

export function updateUserById(id: string, updatedUserData: Partial<User>): User {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    throw new Error("User not found");
  }
  //update user data
  users[userIndex] = { ...users[userIndex], ...updatedUserData };

  return users[userIndex];
}