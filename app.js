/**
 * Created by igor on 6/6/2017.
 */
console.log('starting app');

const fs = require('fs');
const os = require('os');

fs.appendFile('greetings.txt', 'hello Igor', function (err) {
    if (err) {
        console.log('smt went wrong dude');
    }
});