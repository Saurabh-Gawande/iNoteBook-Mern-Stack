const express = require('express');
const router = express.Router();
const Note = require('../model/Note')

router.get('/', (req, res)=>{
   const note = Note(req.body);
   note.save();
   console.log(req.body);
   res.send(req.body)
})


module.exports = router;