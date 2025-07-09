const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const express = require("express");

const app = express();
const { PORT = 3001 } = process.env;

const router = require("./routes");

// blank line to satisfy ESLint
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "686df06d39b0e803d6a07c83",
  };
  next();
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
