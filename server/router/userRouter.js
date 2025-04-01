const userModel = require('../model/userModel')
const express = require('express');

const router = express.Router();


//-----------------------------register-------------------------------
router.post("/register", async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

        const existingUser= await userModel.findOne({email})
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
          }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
);

module.exports = router;