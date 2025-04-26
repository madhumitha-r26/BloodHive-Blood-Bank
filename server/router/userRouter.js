const userModel = require("../model/userModel");
const express = require("express");

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
router.get("api/users", async (req, res) => {
  try {
    const { blood_group } = req.query; // Get the blood group from query parameters

    let donors;
    if (blood_group) {
      // If a blood group is specified, filter donors by blood group
      donors = await userModel.find({ blood_group: blood_group });
    } else {
      // Otherwise, fetch all donors
      donors = await userModel.find();
    }

    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;