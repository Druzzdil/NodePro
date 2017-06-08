console.log('starting notes.js');
const fs = require('fs');


const fetchNotes = () => {
    console.log('fetching notes');
    try {
        let noteString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(noteString);
    } catch (e){
        return [];
    }
};

const saveNotes = (notes) => {
    console.log('saving notes');
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title );
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        console.log('wszystko gra czlowieku');
        return note;
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
