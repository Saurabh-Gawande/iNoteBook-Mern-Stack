const express = require('express');
const User = require('../model/User');
const router = express.Router();

router.post('/', (req, res)=>{
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.json(req.body) ;
})




module.exports = router;