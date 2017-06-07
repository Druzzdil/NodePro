console.log('starting notes.js');

const addNote = (title, body) => {
    console.log(" adding note:", title,body);
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