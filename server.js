// Dependencies
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');
// ShortId creates amazingly short non-sequential url-friendly unique ids. 
// Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.
const shortid = require('shortid');

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// =============================================================


// Routes
// =============================================================
// Return the Note Taker landing page.
app.get('/', (req, res) => {
  console.log("get \*");
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Return the notes.html page
app.get('/notes', (req, res) => {
  console.log("get /notes");
  return res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});