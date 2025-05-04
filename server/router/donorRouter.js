const donorModel = require("../model/donorModel");
const express = require("express");

const router = express.Router();

//-----------------------------register-------------------------------
router.post("/register", async (req, res) => {
  try {
    const existingdonor = await donorModel.findOne({ email: req.body.email });
    if (existingdonor) {
      return res.status(400).json({ message: "donor already exists!" });
    }
    const newdonor = new donorModel(req.body);
    await newdonor.save();
    res.status(201).json({ message: "donor registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//-----------------------------get donors-------------------------------
router.get("/donors", async (req, res) => {
  const bloodGroup = req.query.blood_group;

  try {
    let donors;
    if (bloodGroup && bloodGroup !== "-SELECT-") {
      // Case-insensitive exact match using regex
      donors = await donorModel.find({
        blood_group: { $regex: new RegExp(`^${bloodGroup}$`, "i") }
      });
    } else {
      donors = await donorModel.find(); // Return all donors
    }

    res.json(donors);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;