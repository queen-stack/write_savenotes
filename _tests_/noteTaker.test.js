const fs = require('fs');
const { addNote, deleteNote, getNotes } = require('../../lib/notes');
const { notes } = require('../data/db');

test('creates a note object', () => {
  const note = createNewNote({ title: 'title', text: 'skjdhf' }, notes);

  expect(note.text).toBe('title');
  expect(note.id).toBe('skjdhf');
});

test('find note', () => {
  const startingNotes = [
    {
      title: 'title 1',
      text: 'text 1',
      id: 0
    },
    {
      title: 'title 2',
      text: 'text 2',
      id: 1
    }
  ];

  const updatedNotes = filterByQuery(['title', 'text' , 'id']);

  expect(updatedNotes.length).toEqual(1);
});


  const result = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result).toBe(true);
  expect(result2).toBe(false);

