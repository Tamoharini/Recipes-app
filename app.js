const express = require("express");
const recipeRouter = require("./routes/recipeRoutes");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Recipes API is running successfully");
});

app.use("/", recipeRouter);
module.exports = app;
