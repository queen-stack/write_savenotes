const fs = require('fs');
//const path = require('path');
const shortid = require('shortid');
const dbPath = './data/db.json';


const getNotes= () => {
let notes = readDatabase();
return notes;
}

const addNote = newNote => {
    let notes = readDatabase();
    newNote.id = shortid.generate();
    if (debug) { console.log('newNote.id = ' + newNote.id); }
    notes.push(newNote);
    updateDatabase(notes); 
    return newNote;
}

const deleteNote = idToDelete => {
    let notes = readDatabase();
    // Remove the note with the idToDelete from the in-memory database
    notes = notes.filter(note => note.id !== idToDelete);
    // And write the updated database to disk.
    updateDatabase(notes);
    return notes;
}

const updateDatabase = notes => {
    if (debug) {
      console.log(JSON.stringify(notes));
    }

  fs.writeFileSync(dbPath, JSON.stringify(notes));
}

const readDatabase = () => {
    let notes = JSON.parse(fs.readFileSync(dbPath));
return notes;    
}

module.exports = {getNotes, addNote, deleteNote}