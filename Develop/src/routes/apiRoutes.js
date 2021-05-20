const { Router } = require("express");

const {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
} = require("../controllers/notes");

const router = Router();

router.get("/notes", getAllNotes);

router.get("/notes/:id", getNoteById);

router.post("/notes", createNote);

router.delete("/notes/:id", deleteNote);

module.exports = router;
