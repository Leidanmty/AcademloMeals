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

//Routes
const usersRoutes = express.Router();

usersRoutes.post("/signup", createUser);
usersRoutes.post("/login", login);
usersRoutes.patch("/:id", updateUser);
usersRoutes.delete("/:id", deleteUser);
usersRoutes.get("/orders", allOrders);
usersRoutes.get("/orders/:id", oneOrderById);

module.exports = { usersRoutes };
