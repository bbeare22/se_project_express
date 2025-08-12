require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wtwr_db";

const JWT_SECRET =
  NODE_ENV === "production"
    ? process.env.JWT_SECRET
    : process.env.JWT_SECRET_DEV || "dev-secret";

if (NODE_ENV === "production" && !JWT_SECRET) {
  throw new Error("JWT_SECRET must be set in production");
}

module.exports = { NODE_ENV, PORT, MONGO_URL, JWT_SECRET };
