const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const express = require("express");
const app = express();
const { PORT = 3001 } = process.env;

const router = require("./routes");

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
