const express = require("express");

//Controllers
const {
  createOrder,
  allOrders,
  updateOrder,
  removeOrder,
} = require("../controllers/orders.controller");

//Middlewares
const {
  createOrderValidators,
} = require("../middlewares/validator.middlewares");
const { orderExist } = require("../middlewares/orders.middlewares");

//Routes
const ordersRouter = express.Router();

ordersRouter.post("/", createOrderValidators, createOrder);

ordersRouter.get("/me", allOrders);

ordersRouter.patch("/:id", orderExist, updateOrder);

ordersRouter.delete("/:id", orderExist, removeOrder);

module.exports = { ordersRouter };
