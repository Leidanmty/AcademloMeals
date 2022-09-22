const express = require("express");

//Controllers
const {
  createOrder,
  allOrders,
  updateOrder,
  removeOrder,
} = require("../controllers/orders.controller");
//Middlewares

//Routes
const ordersRoutes = express.Router();

ordersRoutes.post("/", createOrder);

ordersRoutes.get("/me", allOrders);

ordersRoutes.patch("/:id", updateOrder);

ordersRoutes.delete("/:id", removeOrder);

module.exports = { ordersRoutes };
