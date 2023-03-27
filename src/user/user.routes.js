const router = require("express").Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  authUser,
} = require("./user.controller");

router.get("/", getUsers);

router.get("/:id", getUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

// Auth
router.post("/auth", authUser);

module.exports = router;
