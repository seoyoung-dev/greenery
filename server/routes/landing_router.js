const express = require("express");
const router = express.Router();
const { User, TodayArticle } = require("../models");
const auth = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("indexRouter.js");
});

router.post("/todays/article", auth, async (req, res) => {
  try {
    const id = req.user.id;
    const { postId, imgUrl, content } = req.body;
    const user = await User.findOne({ _id: id });
    if (!user.admin) {
      throw new Error("Admin Error");
    }

    const article = { postId, imgUrl, content };
    const todayArticle = new TodayArticle(article);
    todayArticle.save();
    res.json({ isOk: true, message: "성공" });
  } catch (err) {
    console.log(err);
    switch (err.message) {
      case "Admin Error":
        return res.json({ isOk: false });

      default:
        return res.json({ isOk: false });
    }
  }
});

router.get("/todays/article", async (req, res) => {
  try {
    const article = await TodayArticle.find({})
      .sort({ createdAt: -1 })
      .limit(1);

    const { postId, imgUrl, content } = article[0];
    // console.log(postId, imgUrl, content);
    res.json({
      isOk: true,
      postId,
      imgUrl,
      content,
    });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false });
  }
});

module.exports = router;
