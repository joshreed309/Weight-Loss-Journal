const express = require("express");
const router = express.Router();
const { Weights } = require("../models");

router.get("/", async (req, res) => {
  const weightEntries = await Weights.findAll();
  res.json(weightEntries);
});

router.post("/", async (req, res) => {
    const weight = req.body;
    await Weights.create(weight)
    return res.json(weight)
})

module.exports = router;
