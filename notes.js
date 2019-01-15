const fs = require('fs');

var fetch = () => {
  try {
    var noteStr = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(noteStr);
  } catch (e) {
    return [];
  }
};

var save = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var add = (title, body) => {
  var notes = fetch();
  var note = {
    title, body
  }

  // Check duplicates
  var duplicates = notes.filter((note) => note.title === title);

  if (duplicates.length === 0) {
    notes.push(note);
    save(notes);
    return note;
  }
};

var list = () => {
  var notes = fetch();
  if (notes.length > 0) {
    for (x in notes) {
      log(notes[x]);
    }
  } else {
    console.log('No notes found');
  }
};

var read = (title) => {
  var notes = fetch();
  return notes.filter((note) => note.title === title);
};

var remove = (title) => {
  var notes = fetch();
  var newNotes = notes.filter((note) => note.title !== title);
  save(newNotes);
  return !(newNotes.length === notes.length);
};

var log = (note) => {
  debugger
  console.log('--');
  console.log('Title: ', note.title);
  console.log('Body: ', note.body);
};

module.exports = {
  // addNode: addNote
  add,
  list,
  read,
  remove,
  log
}
