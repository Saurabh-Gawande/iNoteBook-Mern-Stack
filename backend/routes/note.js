const express = require('express');
const router = express.Router();
const Note = require('../model/Note')

router.post('/', (req, res) => {
   const note = Note(req.body);
   note.save();
   console.log(req.body);
   res.send(req.body)
});

router.get('/', async (req, res) => {
   const notes = await Note.find();
   res.json(notes);
});


module.exports = router;