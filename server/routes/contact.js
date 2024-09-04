const express = require("express");
const router = express.Router();
const Contact = require("../models/contact"); // Ensure the path is correct

// @route   GET /api/contact
// @desc    Get all contacts
// @access  Public
router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find(); // Fetch all contacts from the database
    res.json(contact); // Return contacts as JSON response
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/contact
// @desc    Add a new contact
// @access  Public
router.post("/", async (req, res) => {
  const { name, email, message } = req.body; // Extract contact details from the request body

  try {
    const newContact = new Contact({ name, email, message }); // Create a new Contact instance
    await newContact.save(); // Save the new contact to the database
    res.json({ msg: "Message sent successfully!" }); // Send a success message
  } catch (error) {
    console.error("Error adding new contact:", error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
