const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = require('yargs')
  .command('add', 'Add new note', {title, body})
  .command('list', 'List notes')
  .command('read', 'Read a note', {title})
  .command('remove', 'Remove a note', {title})
  .help().argv;

var command = argv._[0];
// console.log(argv._);

if (command === 'add') {
  var note = notes.add(argv.title, argv.body);
  if(note) {
    console.log('Note added');
    notes.log(note);
  } else {
    console.log('Title already exists');
  }
} else if (command === 'list') {
  notes.list();
} else if (command === 'read') {
  var found = notes.read(argv.title);
  if(found.length > 0) {
    console.log('Note found');
    notes.log(found[0]);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  console.log(notes.remove(argv.title) ? 'Note removed' : 'Title not found');
} else {
  console.log('Command not recognized');
}
