const {
  getAllUserController,
  getUserByNameController,
  createUserController,
  getUserByIdController,
  deleteUserController,
  updeateUserController,
} = require("../controllers/userControllers");

const createUserHandler = (req, res) => {
  const { name, userName, email, password, role } = req.body;
  const newUser = createUserController(name, userName, email, password, role)
  res.send(newUser);
};

const getAllUserHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    const userByName = getUserByNameController(name);
    res.send(userByName);
  } else {
    const allUser = getAllUserController();
    res.send(allUser);
  }
};

const getUserByIdHandler = (req, res) => {
  const { id } = req.params;
  const userById = getUserByIdController(id);
  res.send(userById);
};

const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  const deletedUser = deleteUserController(id);
  res.send(deletedUser);
};

const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, userName, email, password, role } = req.body;
  const updateUser = updeateUserController(id, name, userName, email, password, role);
  res.send(updateUser);
};

module.exports = {
  getAllUserHandler,
  getUserByIdHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
};
