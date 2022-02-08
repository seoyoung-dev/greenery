const express = require("express");
const router = express.Router();
const { Post } = require("../models/index");
const uploadImage = require("../middlewares/uploadImage");

// Create
router.post("/", uploadImage, async function (req, res) {
  let post = new Post(JSON.parse(req.body.data));

  const imgUrl = req.files.map(file => file.path);
  post.contents.map((content, i) => (content.imgUrl = imgUrl[i]));

  try {
    await post.save();
    res.json({
      isOk: true,
      message: "Post 생성 완료",
      imgUrl: imgUrl,
    });
  } catch (err) {
    res.json({ isOk: false, message: "Post 생성 실패", err });
  }
});

// Search
router.get("/:title", async function (req, res) {
  try {
    const post = await Post.find({ title: req.params.title });
    if (post.length == 0)
      res.json({
        ok: false,
        error: "해당 제목을 가진 글이 존재하지 않습니다.",
      });

    res.json({ isOk: true, post });
  } catch (err) {
    res.json({ isOk: false, message: "검색 실패", err });
  }
});

// Update
router.put("/:postId", async function (req, res) {
  try {
    const result = await Post.updateOne(
      { _id: req.params.postId },
      { $set: req.body },
    );
    res.json({ isOk: true, message: "수정 완료" });
  } catch (err) {
    res.json({ isOk: false, message: "수정 실패", err });
  }
});

// Delete
router.delete("/:postId", async function (req, res) {
  const post = await Post.findOne({ _id: req.params.postId });
  try {
    await Post.deleteOne({ _id: req.params.postId });
    res.json({ isOk: true, message: "post 삭제 완료" });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false, message: "post 삭제 실패", err });
  }
});

module.exports = router;
