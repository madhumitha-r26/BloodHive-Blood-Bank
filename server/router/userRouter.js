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
router.get("/users", async (req, res) => {
  try {
    console.log("Query Parameters:", req.query);
    const { blood_group } = req.query;

    let donors;
    if (blood_group && blood_group !== "-SELECT-") {
      donors = await userModel.find({
        blood_group: { $regex: new RegExp(`^${blood_group}$`, "i") } // case insensitive exact match
      });
    } else {
      donors = await userModel.find();
    }

    res.status(200).json(donors);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "Server error while fetching donors." });
  }
});
