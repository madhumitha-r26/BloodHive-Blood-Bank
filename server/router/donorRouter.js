const express = require("express");
const donorModel = require("../model/donorModel");

const router = express.Router();

//----------------------------- Register Donor -------------------------------
router.post("/register", async (req, res) => {
  try {
    const existingDonor = await donorModel.findOne({ email: req.body.email });
    if (existingDonor) {
      return res.status(400).json({ message: "Donor already exists!" });
    }

    const newDonor = new donorModel(req.body);
    await newDonor.save();

    res.status(201).json({ message: "Donor registered successfully" });
  } catch (error) {
    console.error("Error registering donor:", error);
    res.status(400).json({ error: error.message });
  }
});

//----------------------------- Get Donors -------------------------------
router.get("/donors", async (req, res) => {
  const bloodGroup = req.query.blood_group;

  try {
    let donors;

    if (bloodGroup && bloodGroup !== "-SELECT-") {
      console.log("Filtering by blood group:", bloodGroup);
      donors = await donorModel.find({
        blood_group: bloodGroup,
      });
    } else {
      console.log("Fetching all donors");
      donors = await donorModel.find();
    }

    console.log("Donors Found:", donors);
    res.status(200).json(donors);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//----------------------------- Delete Donor -------------------------------
router.delete("/donors/:id", async (req, res) => {
  const donorId = req.params.id; // Get the donor ID from the request parameters

  try {
    const deletedDonor = await donorModel.findByIdAndDelete(donorId); // Delete donor by ID

    if (!deletedDonor) {
      return res.status(404).json({ message: "Donor not found" }); // If donor not found
    }

    res.status(200).json({ message: "Donor deleted successfully" }); // Success response
  } catch (error) {
    console.error("Error deleting donor:", error); // Log the error
    res.status(500).json({ message: "Server error" }); // Server error response
  }
});

module.exports = router;
