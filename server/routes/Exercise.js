const express = require("express");
const router = express.Router();
const { Exercises } = require("../models");

router.get("/", async (req, res) => {
  const exerciseEntries = await Exercises.findAll();
  res.json(exerciseEntries);
});

router.post("/", async (req, res) => {
  const exercise = req.body;
  console.log(req.body);
  await Exercises.create(exercise);
  return res.json(exercise);
});

module.exports = router;
