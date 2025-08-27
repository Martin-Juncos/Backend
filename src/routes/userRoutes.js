const { Router } = require("express");
const {
  getAllUserHandler,
  getUserByIdHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} = require("../handlers/userHandler");

const userRoutes = Router();

userRoutes.get("/", getAllUserHandler);
userRoutes.get("/:id", getUserByIdHandler);
userRoutes.post("/", createUserHandler);
userRoutes.delete("/:id", deleteUserHandler);
userRoutes.put('/:id', updateUserHandler)

module.exports = userRoutes;
