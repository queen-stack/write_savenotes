const router = require('express').Router();
const { addNote, deleteNote, getNotes } = require('../../lib/notes');

//let notes = JSON.parse(fs.readFileSync('./data/db.json'));

router.get('/notes', (req, res) => {
  let results = getNotes();
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
  const result = deleteNote(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('Notes is not properly formatted.');
  } else {
    const note = createNewNotes(req.body, notes);
    res.json(notes);
  }
});

module.exports = router;