const { isCelebrateError } = require("celebrate");
const { AppError } = require("../utils/errors");
const { NODE_ENV } = require("../utils/config");

module.exports = (err, req, res, next) => {
  if (isCelebrateError && isCelebrateError(err)) {
    const details = [];
    for (const [, value] of err.details) {
      details.push(...value.details.map((d) => d.message));
    }
    return res.status(400).send({ message: "Validation failed", details });
  }

  if (err.name === "ValidationError") {
    return res
      .status(400)
      .send({ message: "Invalid data", details: err.message });
  }

  if (err.name === "CastError") {
    return res.status(400).send({ message: "Invalid ID format" });
  }

  if (err.code === 11000) {
    return res.status(409).send({ message: "Resource already exists" });
  }

  if (err instanceof AppError && err.isOperational) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  if (NODE_ENV !== "production") {
    console.error("Unhandled error:", err);
  }

  return res.status(500).send({ message: "Internal Server Error" });
};
