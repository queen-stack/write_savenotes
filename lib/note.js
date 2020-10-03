const fs = require('fs');
//const path = require('path');
const shortid = require('shortid');

const addNote = req => {
    let newNote = req.body;
    newNote.id = shortid.generate();
    if (debug) { console.log('newNote.id = ' + newNote.id); }
    notes.push(newNote);
    updateDatabase(); 
}
