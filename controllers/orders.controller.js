//files whit security
const dotenv = require("dotenv");

//Modules
const { Meal } = require("../models/meal.model");
const { Order } = require("../models/order.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

dotenv.config({ path: "./details.env" });

//creating endpoints functions
//Crear una nueva order (enviar quantity y mealId por req.body)
const createOrder = catchAsync(async (req, res, next) => {
  const { quantity, mealId } = req.body;

  const id = mealId;

  const mealIdExist = await Meal.findOne({ where: { id } });

  if (!mealIdExist) {
    return res.status(404).json({
      status: "error",
      message: "mealId not found",
    });
  }

  const newOrder = await Order.create({
    quantity,
    mealId,
  });

  res.status(201).json({
    status: "succes",
    data: { newOrder },
  });
});

//Obtener todas las ordenes del usuario
const allOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.findAll();

  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

//Marcar una orden por id con status completed
const updateOrder = catchAsync(async (req, res, next) => {
  const { order } = req;

  await order.update({ status: "completed" });

  res.status(204).json({ status: "success" });
});

//Marcar una orden por id con status cancelled
const removeOrder = catchAsync(async (req, res, next) => {
  const { order } = req;

  await order.update({ status: "cancelled" });

  res.status(204).json({ status: "success" });
});

module.exports = {
  createOrder,
  allOrders,
  updateOrder,
  removeOrder,
};
