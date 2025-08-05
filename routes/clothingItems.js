const router = require("express").Router();
const {
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

const {
  validateAddItem,
  validateItemId,
} = require("../middlewares/validation");

router.post("/", validateAddItem, createItem);

router.delete("/:itemId", validateItemId, deleteItem);

router.put("/:itemId/likes", validateItemId, likeItem);

router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
