const { body, validationResult } = require("express-validator");

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join(". ");

    return res.status(400).json({
      status: "error",
      message,
    });
  }

  next();
};

const createUserValidators = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 6 })
    .withMessage("Name must be at least 6 characters"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .notEmpty()
    .withMessage("Password must be empty")
    .isLength({ min: 6 })
    .withMessage("Password must be at least a 6 caracteres"),
  checkValidations,
];

const createRestaurantValidators = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name can't be empty")
    .isLength({ max: 30 })
    .withMessage("The name exceed limit of characters"),
  body("address")
    .isString()
    .withMessage("Address must be a string")
    .isEmpty()
    .withMessage("Addres can't be empty"),
  body("rating")
    .isNumeric()
    .withMessage("Rating only be a number")
    .isEmpty()
    .withMessage("Rating field is require")
    .isLength({ max: 1 })
    .withMessage("The rating must be of a digit"),
  checkValidations,
];

const createMealValidators = [
  body("name")
    .isString()
    .withMessage("Name is require")
    .notEmpty()
    .withMessage("Name can't be empty"),
  body("price")
    .isNumeric()
    .withMessage("Price must be numeric")
    .notEmpty()
    .withMessage("Price can't be empty"),
  checkValidations,
];

const createOrderValidators = [
  body("quantity")
    .isNumeric()
    .withMessage("Quantity is must be only numeric")
    .notEmpty()
    .withMessage("Quantity can't be empty"),
  body("mealId")
    .isNumeric()
    .withMessage("mealId is must be only numeric")
    .notEmpty()
    .withMessage("mealId can't be empty"),
  checkValidations,
];

module.exports = {
  createUserValidators,
  createRestaurantValidators,
  createMealValidators,
  createOrderValidators,
};
