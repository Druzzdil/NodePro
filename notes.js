console.log('starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    try {
        let noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e){
3
    }

    let duplicateNotes = notes.filter((note) => note.title === title );
    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log('title with that name already exist');
    }
};

const getAll = () => {
    console.log("getting all notes");
};

const readNoteTitle = (title) => {
    console.log("this is node title", title);
};

const removeNote = () => {
    console.log("removing all notes");
};

module.exports = {
    addNote,
    getAll,
    readNoteTitle,
    removeNote
};
