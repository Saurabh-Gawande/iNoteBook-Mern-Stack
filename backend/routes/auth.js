const express = require('express');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/createUser', async (req, res) => {
  const email = await User.findOne({ email: req.body.email });

  if (email) {
    res.status(400).json({ error: "sorry a user with this email already exist" });
  } else {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword
    });

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, process.env.JWT_Token);
    user.save();
    res.json({authToken});
  }
});

router.get('/users', async (req, res) => {
  const user = await User.find();
  res.json(user);
});




module.exports = router;