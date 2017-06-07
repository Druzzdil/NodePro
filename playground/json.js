/**
 * Created by igor on 6/7/2017.
 */

// const obj = {
//     andrew : "igor"
// };
// const strigifier = JSON.stringify(obj);
// console.log(typeof strigifier);
// console.log(strigifier);


// let person = '{"name" : "andrew", "age": "30"}';
// const pies = JSON.parse(person);
// console.log(pies);
const fs = require('fs');

let originalNote = {
    title: "some title",
    body: "some body"
};


const writed = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', writed);


const readedFile = fs.readFileSync('notes.json');
const note = JSON.parse(readedFile);
console.log(typeof note);
console.log(note.title);

