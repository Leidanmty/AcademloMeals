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
const ordersRoutes = express.Router();

ordersRoutes.post("/", createOrderValidators, createOrder);

ordersRoutes.get("/me", allOrders);

ordersRoutes.patch("/:id", orderExist, updateOrder);

ordersRoutes.delete("/:id", orderExist, removeOrder);

module.exports = { ordersRoutes };
