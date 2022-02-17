const express = require("express");
const router = express.Router();
const { Plant } = require("../models");
const translateOptionToText = require("../util/translateSearchOption");

router.get("/search", async (req, res) => {
  try {
    const { page, count, ...filterOption } = req.query;
    const pageNumber = page || 1;
    const plantCount = count || 20;

    const translated = translateOptionToText(filterOption);
    const plants = await Plant.aggregate(translated)
      .sort({ plantName: 1 })
      .skip(plantCount * (pageNumber - 1))
      .limit(plantCount);

    if (!plants) {
      return res.status(205).json({ isOk: false, message: "empty" });
    }

    return res.status(200).json({ isOk: true, plants });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ isOk: false });
  }
});

module.exports = router;
