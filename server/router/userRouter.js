const userModel = require('../model/userModel');
const express = require('express');

const router = express.Router();

//-----------------------------register-------------------------------
router.post("/register", async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//-----------------------------get donors-------------------------------
router.get("/users", async (req, res) => {
    try {
        const donors = await userModel.find(); // Fetch all users (or filter by role if needed)
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;