const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const app = express();
const { PORT = 3001 } = process.env;

const router = require("./routes");
const { login, createUser } = require("./controllers/users");
const auth = require("./middlewares/auth");
const errorHandler = require("./middlewares/error-handler");
const { validateSignup, validateSignin } = require("./middlewares/validation");

const { requestLogger, errorLogger } = require("./middlewares/logger");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.post("/signin", validateSignin, login);
app.post("/signup", validateSignup, createUser);
app.get("/items", require("./controllers/clothingItems").getItems);

app.use(auth);

app.use("/", router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
