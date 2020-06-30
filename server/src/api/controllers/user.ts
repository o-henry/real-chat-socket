const users: any[] = [];

export const addUser = ({ id, name }: any) => {
  name = name.trim().toLowerCase();

  const existingUser = users.find((user) => user.name === name);

  if (!name) return { error: "Username are required." };
  if (existingUser) return { error: "Username is taken." };

  const user = { id, name };

  users.push(user);

  return { user };
};

export const removeUser = (id: any) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

export const getUser = (id: any) => users.find((user) => user.id === id);
