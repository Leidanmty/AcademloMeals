//Modules
const { Order } = require("../models/orders.model");

//creating endpoints functions
//Crear una nueva order (enviar quantity y mealId por req.body)
const createOrder = async (req, res) => {
  try {
    const { quantity, mealId } = req.body;
    const newOrder = await Order.create({ quantity, mealId });

    res.status(201).json({
      status: "succes",
      data: { newOrder },
    });
  } catch (error) {
    console.log(error);
  }
};
//Obtener todas las ordenes del usuario
const allOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
//Marcar una orden por id con status completed
const updateOrder = async (req, res) => {
  try {
    const { order } = req;

    await order.update({ status: "completed" });

    res.status(204).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};
//Marcar una orden por id con status cancelled
const removeOrder = async (req, res) => {
  try {
    const { order } = req;

    await order.update({ status: "cancelled" });

    res.status(204).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrder,
  allOrders,
  updateOrder,
  removeOrder,
};
