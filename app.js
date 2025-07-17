const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const { PORT = 3001 } = process.env;

const router = require("./routes");
const { login, createUser } = require("./controllers/users");
const auth = require("./middlewares/auth");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// Public routes
app.post("/signin", login);
app.post("/signup", createUser);
app.get("/items", require("./controllers/clothingItems").getItems);

// Protect everything else
app.use(auth);

// All protected routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
