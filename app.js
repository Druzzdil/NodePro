/**
 * Created by igor on 6/6/2017.
 */
console.log('starting app.js');
const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs');
const argv = yargs.argv;


const _ = require('lodash');

const command = argv._[0];

if(command === 'add') {
    console.log('adding new note');
   let note =  notes.addNote(argv.title, argv.body);

} else if ( command === 'list') {
    let everyNote = notes.getAll();
    console.log(`printing all ${everyNote.length} note(s).`);
    everyNote.forEach((note) => notes.logNote(note));
} else if ( command === 'read') {
    console.log('fetching notes');
    let note = notes.readNoteTitle(argv.title);
    if(note){
        console.log('this is the title u provide', note.title);
    } else {
        console.log('not found note');
    }
}  else if ( command === 'remove') {
    console.log('removing all notes');
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "not was remove" : "note not found";
    console.log(message);
} else if (command === 'show') {
    const t = fs.createReadStream(__filename).pipe(process.stdout);
}
