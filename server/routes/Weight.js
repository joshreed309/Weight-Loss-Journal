const express = require("express");
const router = express.Router();
const { Weights, sequelize } = require("../models");

router.get("/", async (req, res) => {
  const weightEntries = await Weights.findAll({
    attributes: {
      include: [
        "id",
        "weightEntry",
        [
          sequelize.fn(
            "DATE_FORMAT",
            sequelize.col("createdAt"),
            "%d/%m/%Y"
          ),
          "createdAt",
        ],
        "updatedAt",
      ],
    },
  });
  res.json(weightEntries);
});

router.get("/ByID/:id", async (req, res) => {
  const id = req.params.id;
  const weight = await Weights.findByPk(id);
  res.json(weight);
});

router.post("/", async (req, res) => {
  const weight = req.body;
  await Weights.create(weight);
  return res.json(weight);
});

module.exports = router;
