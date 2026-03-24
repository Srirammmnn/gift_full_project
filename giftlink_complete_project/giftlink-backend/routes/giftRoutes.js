const express = require('express');
const router = express.Router();
const connectDB = require('../models/db');

router.get("/", async (req, res) => {
  const db = await connectDB();
  const gifts = await db.collection("gifts").find().toArray();
  res.json(gifts);
});

router.get("/:id", async (req, res) => {
  const db = await connectDB();
  const gift = await db.collection("gifts").findOne({ _id: req.params.id });
  res.json(gift);
});

module.exports = router;
