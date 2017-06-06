/**
 * Created by igor on 6/6/2017.
 */
console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.addNote();
let add = notes.add(3,6);
console.log('result:', notes.add(3,5));
let user = os.userInfo();

fs.appendFile('greetings.txt', `hello ${user.username}!` + add , res => {
    if (err) throw error;
});
