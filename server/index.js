const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// 1. Load environment variables FIRST
dotenv.config();

const DbConnection = require('./DbConnection');
const app = express();

// 2. Connect to database AFTER dotenv is loaded
DbConnection();

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

const donorRouter = require("./router/donorRouter");
app.use("/api", donorRouter);

// Use a fallback port so it doesn't crash if PORT is missing
const PORT = process.env.PORT || 5000;

// Add this after your middlewares and before the donorRouter

app.get("/", (req, res) => {
  res.json({ 
    message: "BloodHive Backend is running successfully!",
    status: "OK"
  });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`SERVER IS RUNNING ON PORT - ${PORT}`);
    });
}

module.exports = app;