const Note = require('../models/Note');

// Create a Note
exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });

        const note = new Note({ title, content });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get All Notes
exports.getAllNotes = async (req, res) => {
    try {
        const { title } = req.query; // Get the title from query parameters

        let query = {}; // Initialize query object

        if (title) {
            // Use case-insensitive regex to search for partial matches
            query.title = { $regex: new RegExp(title, 'i') };
        }

        const notes = await Note.find(query); // Fetch notes based on query

        res.status(200).json(notes); // Return filtered or all notes
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error });
    }
};

// Get Note by ID
exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ error: 'Note not found' });

        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a Note
exports.updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNote) return res.status(404).json({ error: 'Note not found' });

        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a Note
exports.deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ error: 'Note not found' });

        res.json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//getby title
// const getNotes = async (req, res) => {
//     try {
//         const { title } = req.query; // Get the title from query params
//         let query = {};

//         if (title) {
//             query.title = { $regex: title, $options: "i" }; // Case-insensitive search
//         }

//         const notes = await Note.find(query); // Fetch notes with filter
//         res.json(notes);
//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error: error.message });
//     }
// };
