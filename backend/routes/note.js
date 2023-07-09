const express = require("express");
const router = express.Router();
const Notes = require("../model/Note");
const fetchuser = require("../Middleware/fetchUser");

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error });
  }
});

router.post("/addnote", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const note = new Notes({
      title,
      description,
      tag,
      user: req.user.id,
    });
    note.save();
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error });
  }
});

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).send("not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error });
  }
});

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error });
  }
});

module.exports = router;
