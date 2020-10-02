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
      id: '1',
      name: 'Input',
      task: ['action']
    },
    {
      id: '2',
      name: 'Input',
      task: ['reminder']
    }
  ];

  const updatedNotes = filterByQuery([task: 'action' , reminder]);

  expect(updatedNotes.length).toEqual(1);
});

test('finds by id', () => {
  const startingNotes = [
    {
      //enter test data
    },
    {
     //enter test data
    }
  ];

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
