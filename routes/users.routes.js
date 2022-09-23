const express = require("express");
//Controllers
const {
  createUser,
  login,
  updateUser,
  deleteUser,
  allOrders,
  oneOrderById,
} = require("../controllers/users.controller");

//Middlewares
const { userExist } = require("../middlewares/users.middlewares");
const {
  createUserValidators,
} = require("../middlewares/validator.middlewares");

//Routes
const usersRoutes = express.Router();

usersRoutes.post("/signup", createUserValidators, createUser);
usersRoutes.post("/login", login);
usersRoutes.patch("/:id", userExist, updateUser);
usersRoutes.delete("/:id", userExist, deleteUser);
usersRoutes.get("/orders", allOrders);
usersRoutes.get("/orders/:id", oneOrderById);

module.exports = { usersRoutes };
