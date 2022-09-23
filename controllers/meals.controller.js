//Models
const { Meal } = require("../models/meals.model");

//Creating endpoints functions
const createMeal = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { restaurantIdExist } = req;

    await restaurantIdExist.create({ name, price });

    res.status(201).json({
      status: "Success",
      data: { restaurantIdExist },
    });
  } catch (error) {
    console.log(error);
  }
};

//Obtener todas las comidas con status active
const allMeals = async (req, res) => {
  try {
    const meals = await Meal.findAll({
      where: { status: "active" },
    });

    res.status(200).json({
      status: "success",
      data: { meals },
    });
  } catch (error) {
    console.log(error);
  }
};

const oneMeal = async (req, res) => {
  try {
    const meal = await Meal.findOne({
      where: { id, status: "active" },
    });

    res.status(200).json({
      status: "success",
      data: { meal },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateMeal = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { meal } = req;

    await meal.update({ name, price });

    res.status().json({
      status: "success",
      data: { meal },
    });
  } catch (error) {
    console.log(error);
  }
};

const removeMeal = async (req, res) => {
  try {
    const { meal } = req;

    await meal.update({ status: "deleted" });

    res.status(204).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createMeal,
  allMeals,
  oneMeal,
  updateMeal,
  removeMeal,
};
