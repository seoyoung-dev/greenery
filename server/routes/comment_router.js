const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { Post, Comment, User } = require("../models/index");

// 댓글조회
router.get("/:postId/comment", async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findOne({ _id: postId }, "comments");
    const comments = post.comments;

    res.status(200).json(post);
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
router.put("/:postId/comment/:commentId", (req, res) => {
  // $set : 필드값을 지정된값으로 변경
  // ...ing
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
          comments: { author: commentId },
        },
      },
    );
    res.status(200).json({ message: "댓글이 삭제되었습니다." });
  } catch (err) {}
});

module.exports = router;
