const { users } = require("../db/dataBase");
// const { v4: uuidv4 } = require("uuid");

const createUserController = (name, userName, email, password, role) => {
  // const id = uuidv4();
  const id = users.length + 1;
  const newUser = { id, name, userName, email, password, role };
  users.push(newUser);
  return newUser;
};

const getAllUserController = () => {
  return users;
};

const getUserByNameController = (name) => {
  const userByName = users.filter((user) => user.name === name);
  return userByName;
};

const getUserByIdController = (id) => {
  const userById = users.find((user) => user.id === Number(id));
  return userById;
};

const deleteUserController = (id) => {
  const index = users.findIndex((user) => user.id === Number(id));
  let deletedUser = null;
  if (index !== -1) {
    [deletedUser] = users.splice(index, 1);
  }
  return deletedUser;
};

const updeateUserController = (id, name, userName, email, password, role) => {
  const newUserData = { name, userName, email, password, role };
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    Object.assign(user, newUserData);
  }
  return user;
};

module.exports = {
  getAllUserController,
  getUserByNameController,
  getUserByIdController,
  createUserController,
  deleteUserController,
  updeateUserController,
};
