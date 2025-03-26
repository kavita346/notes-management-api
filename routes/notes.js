const express = require('express');
const router = express.Router();
const {
    createNote,
    getAllNotes,  // Now supports filtering by title
    getNoteById,
    updateNote,
    deleteNote
} = require('../controllers/notesController');

// Route to create a new note
router.post('/', createNote);

// Route to get all notes (supports filtering by title using query params)
router.get('/', getAllNotes);

// Route to get a specific note by ID
router.get('/:id', getNoteById);

// Route to update a note by ID
router.put('/:id', updateNote);

// Route to delete a note by ID
router.delete('/:id', deleteNote);

module.exports = router;

