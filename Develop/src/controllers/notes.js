const fs = require("fs");
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
  const id = 2;

  const { body } = req;
  const { text, title } = body;
  console.log(id, "id");
  console.log(body, "body");

  let notes = getFromDb();
  console.log(notes, "notes");

  const newNote = {
    id,
    text,
    title,
  };
  notes.push(newNote);
  console.log(newNote, "newNote");

  const callback = (err) => {
    if (err) {
      console.log("fail", err);
    } else {
      console.log("pass");
    }
  };

  notes = JSON.stringify(notes);

  fs.writeFile("/db/db.json", notes, callback);
};

const deleteNote = (req, res) => {
  notes, newNote, writeToDb(JSON.stringify(newNotes));

  res.json({ success: true });
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
};
