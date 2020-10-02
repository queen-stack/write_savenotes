const fs = require('fs');
const path = require('path');
// ShortId creates amazingly short non-sequential url-friendly unique ids. 
// You'll need to find a way to give each note a unique id when it's saved.
const shortid = require('shortid');


//let notes =[] experiment
// Sets up the Express app to handle data parsing

// Data
// =============================================================
let notes = JSON.parse(fs.readFileSync('./db/db.json'));

// Routes
// =============================================================

//Build route for new note
app.post('/api/notes', (req, res) => {
    console.log(req.body);
});
//where is this popping up? terminal / browser

// Return the Note Taker landing page.
app.get('/', (req, res) => {
  console.log("get \*"); //wildcard = '*' will return to the index if not found
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Return the notes.html page
app.get('/notes', (req, res) => {
  console.log("get /notes");
  return res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});
// Return all the notes in the database
app.get('/api/notes', (req, res) => {
    console.log("get /api/notes");
    let results = notes;
    res.json(results);
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
// routes don't matter till they are called
//remember the path you created