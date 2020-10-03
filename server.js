const express = require('express');
const fs = require('fs');
const path = require('path');
const shortid = require('shortid');


const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));  // 

const debug = true;   //   -- set to false before committing!

// Set up the data
// =============================================================

// Write the "database" information back to disk
// Added v0.7
function updateDatabase() {
  if (debug) {
    console.log(JSON.stringify(notes));
  }

  fs.writeFileSync('./data/db.json', JSON.stringify(notes));
}

// Routes
// =============================================================
// Return the Note Taker landing page.
app.get('/', (req, res) => {

  if (debug) { console.log("get /"); }  // 

  res.sendFile(path.join(__dirname, './public/index.html'))
});

// Return the notes.html page
app.get('/notes', (req, res) => {

  if (debug) { console.log("get /notes"); }  // 

  res.sendFile(path.join(__dirname, './public/notes.html'))
});

// Return all the notes in the database
app.get('/api/notes', (req, res) => {

  if (debug) { console.log("get /api/notes"); }  // 

  res.json(notes);
});

// Skeleton route for adding a new note.
// Updated for v0.7.
app.post('/api/notes', (req, res) => {

  let newNote = req.body;
  newNote.id = shortid.generate();

  if (debug) { console.log('newNote.id = ' + newNote.id); }  // updated v0.7

  notes.push(newNote); // Add new note to the in-memory "database"
  updateDatabase();    // Update that database on disk
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {

  let idToDelete = req.params.id;

  if (debug) { console.log('Deleting note: ' + idToDelete); }  // updated v0.7

  // Remove the note with the idToDelete from the in-memory database
  notes = notes.filter(note => note.id !== idToDelete);
  // And write the updated database to disk.
  updateDatabase();

  res.json(notes);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
