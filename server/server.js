// server.js
require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Register routes
app.use("/api/contact", require("./routes/contact.js")); // Ensure this matches your route file

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
