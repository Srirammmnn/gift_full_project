const express = require('express');
const router = express.Router();
const connectDB = require('../models/db');

router.post("/login", async (req, res) => {
  const db = await connectDB();
  const user = await db.collection("users").findOne({ email: req.body.email });
  res.json(user);
});

module.exports = router;
