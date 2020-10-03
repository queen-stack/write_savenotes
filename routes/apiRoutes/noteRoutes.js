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
  console.log(JSON.stringify(req.body));
   var results = addNote(req.body);
   console.log (JSON.stringify(results));
   return res.json(results);
   });

module.exports = router;