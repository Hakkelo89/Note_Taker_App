const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const getAllNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

const getNoteById = (req, res) => {
  const { id } = req.params;
  const notes = getFromDb();

  const note = notes[id];

  res.json(note);
};

const createNote = (req, res) => {
  const id = uuidv4();

  const { text, title } = req.body;

  const notes = getFromDb();

  const newNote = {
    id,
    text,
    title,
  };
  notes.push(newNote);

  writeToDb(JSON.stringify(notes));
  res.json({ success: true });
};

const deleteNote = (req, res) => {
  const notes = getFromDb();

  const { id } = req.params;

  const callback = (note) => {
    return note.id !== id;
  };

  const filteredData = notes.filter(callback);

  writeToDb(JSON.stringify(filteredData));

  res.json({ success: true });
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
};
