const express = require("express");
const router = express.Router();
const { Plant } = require("../models");
const translateOptionToText = require("../util/translateSearchOption");

router.get("/search", async (req, res) => {
  try {
    const { page, ...filterOption } = req.query;
    const plantCount = 20;

    const translated = translateOptionToText(filterOption);
    const plants = await Plant.aggregate(translated)
      .sort({ plantName: 1 })
      .skip(plantCount * (page - 1))
      .limit(plantCount);

    if (!plants) {
      return res.status(205).json({ isOk: false, message: "empty" });
    }

    res.status(200).json({ isOk: true, plants });
  } catch (err) {
    console.log(err);
    res.status(500).json({ isOk: false });
  }
});

module.exports = router;
