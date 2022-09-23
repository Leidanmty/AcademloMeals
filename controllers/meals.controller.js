//files whit security
const dotenv = require("dotenv");

//Models
const { Meal } = require("../models/meal.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

dotenv.config({ path: "./details.env" });

//Creating endpoints functions
const createMeal = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const { restaurantId } = req;

  const newMeal = await Meal.create({
    name,
    price,
    restaurantId: restaurantId.id,
  });

  res.status(201).json({
    status: "Success",
    data: { newMeal },
  });
});

//Obtener todas las comidas con status active
const allMeals = catchAsync(async (req, res, next) => {
  const meals = await Meal.findAll({
    where: { status: "active" },
  });

  res.status(200).json({
    status: "success",
    data: { meals },
  });
});

const oneMeal = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const meal = await Meal.findOne({
    where: { id, status: "active" },
  });

  res.status(200).json({
    status: "success",
    data: { meal },
  });
});

const updateMeal = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const { meal } = req;

  await meal.update({ name, price });

  res.status(200).json({
    status: "success",
    data: { meal },
  });
});

const removeMeal = catchAsync(async (req, res, next) => {
  const { meal } = req;

  await meal.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

module.exports = {
  createMeal,
  allMeals,
  oneMeal,
  updateMeal,
  removeMeal,
};
