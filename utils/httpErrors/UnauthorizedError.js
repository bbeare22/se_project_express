const AppError = require("./AppError");

class UnauthorizedError extends AppError {
  constructor(message = "Authorization required") {
    super(message, 401);
  }
}

module.exports = UnauthorizedError;
