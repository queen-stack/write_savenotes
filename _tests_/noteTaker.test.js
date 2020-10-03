const fs = require('fs');
const { filterByQuery, findById, createNewNote, validateNote} = require('../lib/note.js');
const { notes } = require('../data/db');

test('creates a note object', () => {
  const note = createNewNote({ name: 'name', id: 'jhgdja3ng2' }, notes);

  expect(note.name).toBe('name');
  expect(note.id).toBe('jhgdja3ng2');
});

test('filters by query', () => {
  const startingNotes = [
    {
      title: 'title 1',
      text: 'text 1',
      id: 0
    },
    {
      title: 'title 2',
      text: 'text 2',
      id: 2
    }
  ];

  const updatedNotes = filterByQuery(['title', 'text' , 'id']);

  expect(updatedNotes.length).toEqual(1);
});


  const result = findById('3', startingNotes);

  expect(result.id).toBe('name');
});

test('validates task type', () => {
  
  };

  const invalidNote = {
    id: '3',
    //fill this out
  };

  const result = validateNote(note);
  const result2 = validateNote(invalidNote;

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
