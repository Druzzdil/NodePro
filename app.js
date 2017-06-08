/**
 * Created by igor on 6/6/2017.
 */
console.log('starting app.js');

const notes = require('./notes.js');
const yargs = require('yargs');
const argv = yargs.argv;

console.log('yargs:', argv);

const _ = require('lodash');
console.log(process, 'this is argv list');

const command = argv._[0];
console.log('Command:', command);


if(command === 'add') {
    console.log('adding new note');
   let note =  notes.addNote(argv.title, argv.body);

} else if ( command === 'list') {
    console.log('listing all notes');
    notes.getAll();
} else if ( command === 'read') {
    console.log('fetching notes');
    notes.readNoteTitle(argv.title);
}  else if ( command === 'remove') {
    console.log('removing all notes');
    notes.removeNote();
} else {
    console.log('not regonized command');
}
