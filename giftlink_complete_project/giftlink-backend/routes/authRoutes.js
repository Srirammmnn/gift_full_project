const express = require('express');
const router = express.Router();
const connectDB = require('../models/db');



router.post('/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // The findOne method used to locate the current user by email
        const theUser = await collection.findOne({ email: req.body.email });

        if (theUser) {
            // Logic to check password and return JWT would follow here
            return res.status(200).json({ email: theUser.email, name: theUser.firstName });
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (e) {
        return res.status(500).send("Internal server error");
    }
});

module.exports = router;
