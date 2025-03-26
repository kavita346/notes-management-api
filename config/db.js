const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is undefined! Check your .env file.");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
    console.error("❌ MongoDB Connection Error:", err);
});

// Graceful shutdown on app termination
process.on('SIGINT', async () => {
    console.log("🔻 Closing MongoDB Connection...");
    await mongoose.connection.close();
    process.exit(0);
});

module.exports = connectDB;
