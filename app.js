const express = require("express");

//Routers
const { usersRoutes } = require("./routes/users.routes");
const { restaurantsRoutes } = require("./routes/restaurants.routes");
const { mealsRoutes } = require("./routes/meals.routes");
const { ordersRoutes } = require("./routes/orders.routes");

//Init our Express app
const app = express();

//Enable Express app to receive JSON data
app.use(express.json());

//Define Endpoints
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/restaurants", restaurantsRoutes);
app.use("/api/v1/meals", mealsRoutes);
app.use("/api/v1/orders", ordersRoutes);

//Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
