const fs = require('fs');

var originalNote = {
  title: 'The title',
  body: 'The body'
};
const filename = 'notes.json';
// Turn the JSON object to string
var originalNoteStr = JSON.stringify(originalNote);
// console.log(typeof originalNoteStr);
// console.log(originalNoteStr);
// Write the string to file system
fs.writeFileSync(filename, originalNoteStr);

// Read the file to the string
var noteStr = fs.readFileSync(filename);
// Parse the string to JSON object
var note = JSON.parse(noteStr);
// console.log(typeof note);
// console.log(note);
// console.log(note.title);
// console.log(note.body);
