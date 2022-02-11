const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/uploadImage");
const auth = require("../middlewares/auth");
const { Post, Comment, User } = require("../models/index");

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

// comment-router
// 댓글 조회
router.get("/:postId/comment", async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findOne({ _id: postId }, "comments");
    const comments = post.comments;

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ isOk: false, message: "댓글조회 실패" });
  }
});

// 댓글작성
router.post("/:postId/comment", auth, async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findOne({ postId });
    if (!post) throw new Error("해당 게시물이 존재하지 않습니다.");

    const { content } = req.body;
    const author = req.user.id;

    const comment = await new Comment({ author, content });
    comment.save();
    await Post.findOneAndUpdate(
      { _id: postId },
      // $push: Array field에 값을 push 한다.
      { $push: { comments: comment } },
    );

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ isOk: false, message: err.message });
    return;
  }
});

// 댓글수정
// 배열인 경우 pull push는 알겠는데 중간값을 수정하는 방법을 모르겠다..😥
router.put("/:postId/comment/:commentId", async (req, res) => {
  try {
    const { postId, commentId } = req.params;

    await Post.findOneAndUpdate(
      { _id: postId },
      {
        $set: {
          comments: { _ },
        },
      },
    );
    // $set : 필드값을 지정된값으로 변경
    // ...ing
  } catch (err) {
    res.status(400).json({ message: "댓글 수정 실패" });
  }
});

// 댓글삭제
router.delete("/:postId/comment/:commentId", async (req, res) => {
  try {
    const { postId, commentId } = req.params;

    await Post.findOneAndUpdate(
      { _id: postId },
      {
        // $pull: 조건에 만족하는 특정한 요소를 꺼낸다.(즉 제거)
        $pull: {
          comments: { _id: commentId },
        },
      },
    );

    res.status(200).json({ message: "댓글이 삭제되었습니다." });
  } catch (err) {
    res.status(400).json({ message: "댓글 삭제 실패" });
  }
});

module.exports = router;

module.exports = router;
