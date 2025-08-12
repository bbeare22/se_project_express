const router = require("express").Router();
const itemRoutes = require("./clothingItems");
const { getCurrentUser, updateUser } = require("../controllers/users");
const { NotFoundError } = require("../utils/errors");
const { validateUpdateUser } = require("../middlewares/validation");

router.use("/items", itemRoutes);

router.get("/users/me", getCurrentUser);
router.patch("/users/me", validateUpdateUser, updateUser);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
