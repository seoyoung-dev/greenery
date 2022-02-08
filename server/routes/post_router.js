const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Post } = require("../models/index");

// Create
router.post("/", async function (req, res) {
  const post = new Post(req.body);
  try {
    const result = await post.save();
    res.json({ ok: true, message: "post 생성 완료" });
  } catch (err) {
    res.json({ ok: false, message: "post 생성 실패", err });
  }
});

// Search
router.get("/:title", async function (req, res) {
  try {
    const post = await Post.find({ title: req.params.title });
    if (post.length == 0)
      return res.status(404).json({
        error: "해당 제목을 가진 글이 존재하지 않습니다.",
        ok: false,
      });
    res.json({ ok: true, post });
  } catch (err) {
    res.json({ ok: false, message: "검색 실패", err });
  }
});

// Update
router.put("/:postId", async function (req, res) {
  try {
    const result = await Post.updateOne(
      { _id: req.params.postId },
      { $set: req.body },
    );
    res.json({ ok: true, message: "수정 완료" });
  } catch (err) {
    res.json({ ok: false, message: "수정 실패", err });
  }
});

// Delete
router.delete("/:postId", async function (req, res) {
  const post = await Post.findOne({ _id: req.params.postId });
  try {
    await Post.deleteOne({ _id: req.params.postId });
    res.json({ ok: true, message: "post 삭제 완료" });
  } catch (err) {
    console.log(err);
    res.json({ ok: false, message: "post 삭제 실패", err });
  }
});

module.exports = router;
