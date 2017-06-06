/**
 * Created by igor on 6/6/2017.
 */
console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

let res = notes.addNote();
let add = notes.add(3,6);
console.log('result:', notes.add(3,5));
let user = os.userInfo();
let filteredArray = _.uniq(['igor', 1, 'igor', 1,2,3,4]);
console.log(filteredArray);

fs.appendFile('greetings.txt', `hello ${user.username}!` + add , err => {
    if (err) throw error;
});
