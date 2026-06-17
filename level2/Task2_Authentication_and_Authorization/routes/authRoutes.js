const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post("/signup", signup);

router.post("/login", login);

router.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Protected Profile",
    user: req.user,
  });
});

router.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.json({
    message: "Admin Dashboard",
  });
});

module.exports = router;
