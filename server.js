require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/notes', require('./routes/notes'));

app.get("/", (req, res) => res.send("Notes API is running"));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
