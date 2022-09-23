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
  protectSession,
  protectUsersAccount,
} = require('../middlewares/auth.middlewares');
const {
  createUserValidators,
} = require("../middlewares/validator.middlewares");

//Routes
const usersRouter = express.Router();

usersRouter.post("/signup", createUserValidators, createUser);
usersRouter.post("/login", login);

usersRouter.use(protectSession);

usersRouter.patch("/:id", userExist, protectUsersAccount, updateUser);
usersRouter.delete("/:id", userExist, protectUsersAccount, deleteUser);
usersRouter.get("/orders", allOrders);
usersRouter.get("/orders/:id", oneOrderById);


module.exports = { usersRouter };
