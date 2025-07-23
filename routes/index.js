const router = require("express").Router();
const itemRoutes = require("./clothingItems");
const { getCurrentUser, updateUser } = require("../controllers/users");
const { NOT_FOUND } = require("../utils/errors");

router.use("/items", itemRoutes);

router.get("/users/me", getCurrentUser);
router.patch("/users/me", updateUser);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
