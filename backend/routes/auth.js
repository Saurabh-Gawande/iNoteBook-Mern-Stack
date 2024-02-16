const express = require("express");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fetchUser = require("../Middleware/fetchUser");
require("dotenv").config();

router.post("/createUser", async (req, res) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    let success = false;
    if (email) {
      return res
        .status(400)
        .json({ success, error: "sorry a user with this email already exist" });
    }
    if (req.body.password !== req.body.cpassword) {
      return res
        .status(400)
        .json({ success, error: "Posssword is not matichhing" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_Token);
    user.save();
    success = true;
    return res.json({ success, authToken });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("internal Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let success = false;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success,
        error: "please try to login with correct credential",
      });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({
        success,
        error: "please try to login with correct credential",
      });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(data, process.env.JWT_Token);
    success = true;
    return res.json({ success, authToken });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal server Error");
  }
});

router.post("/getusers", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    console.log(user);
    return res.json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(401).send("Internal server Error");
  }
});

module.exports = router;
