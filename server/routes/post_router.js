const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/uploadImage");
const auth = require("../middlewares/auth");
const { Post, Comment } = require("../models/index");
const changeTimeFormat = require("../util/changeTimeFormat");

router.get("/", async function (req, res) {
  try {
    const postId = req.query.postId;
    const posts = await Post.findOne({ _id: postId }).populate(
      "author",
      "name profileImg _id",
    );
    const recorded = changeTimeFormat(posts.createdAt);
    res.json({ isOk: true, posts, recorded });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false, message: "게시글을 불러오기 실패" });
  }
});

// 페이지네이션
router.get("/page/:pageNumber", async function (req, res) {
  try {
    const postsCount = 12;
    const { pageNumber } = req.params;
    const [total, posts] = await Promise.all([
      Post.countDocuments(),
      Post.find({})
        .sort({ createdAt: -1 })
        .skip(postsCount * (pageNumber - 1))
        .limit(postsCount)
        .populate("author", "name profileImg _id"),
    ]);
    const newPosts = posts.map(post => {
      return {
        id: post.id,
        author: post.author,
        title: post.title,
        contents: post.contents,
        likes: post.likes,
        createdAt: changeTimeFormat(post.createdAt),
      };
    });
    res.json({ isOk: true, total, newPosts });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false, message: "불러오기 실패" });
  }
});

router.get("/popularity", async function (req, res) {
  try {
    const current = Date.now();
    const monthToSecond = 30 * 24 * 3600000;
    const posts = await Post.find({
      createdAt: {
        $lte: new Date(current),
        $gt: new Date(current - monthToSecond),
      },
    })
      .sort({ likes: -1, createdAt: -1 })
      .limit(3)
      .populate("author", "name profileImg _id");
    const newPosts = posts.map(post => {
      return {
        id: post.id,
        author: post.author,
        title: post.title,
        contents: post.contents,
        likes: post.likes,
        createdAt: changeTimeFormat(post.createdAt),
      };
    });
    res.json({ isOk: true, newPosts });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false, message: "게시글을 불러오기 실패" });
  }
});

// Create
router.post("/", auth, uploadImage, async function (req, res) {
  try {
    const id = req.user.id;
    const { title, contents, img } = req.body;
    const pictures = req.files;
    if (!title || (!contents && !pictures)) {
      throw new Error("wrong format");
    }
    const contentList = contents.map((content, idx) => {
      if (!img[idx]) {
        return {
          content,
          imgUrl: pictures[idx].path.replace("public/", ""),
        };
      }
    });

    const postData = { author: id, title, contents: contentList };
    const post = new Post(postData);
    await post.save();
    res.json({
      isOk: true,
      message: "Post 생성 완료",
    });
  } catch (err) {
    console.log(err);
    switch (err.message) {
      case "wrong format":
        return res.json({ isOk: false, message: "잘못된 포스팅 양식", err });
      default:
        return res.json({ isOk: false, message: "Post 생성 실패" });
    }
  }
});

// Search
router.get("/search", async function (req, res) {
  try {
    const postsCount = 12;
    const { pageNumber, keyword } = req.query;
    const [total, posts] = await Promise.all([
      Post.countDocuments({ title: { $regex: keyword } }),
      Post.find({
        title: { $regex: new RegExp(keyword) },
      })
        .sort({ createdAt: -1 })
        .skip(postsCount * (pageNumber - 1))
        .limit(postsCount)
        .populate("author", "name profileImg _id"),
    ]);
    if (posts.length == 0)
      return res.json({
        ok: false,
        error: "해당 제목을 가진 글이 존재하지 않습니다.",
      });
    res.json({ isOk: true, total, posts });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false, message: "검색 실패" });
  }
});

// Update
router.put("/:postId", auth, uploadImage, async function (req, res) {
  try {
    const id = req.user.id;
    const { postId } = req.params;
    const { title, contents, img } = req.body;
    const pictures = req.files;
    if (!title || (!contents && !pictures)) {
      throw new Error("wrong format");
    }
    const contentList = contents.map((content, idx) => {
      if (!img[idx]) {
        return {
          content,
          imgUrl: pictures[idx].path.replace("public/", ""),
        };
      }
      return {
        content,
        imgUrl: img[idx],
      };
    });
    const postData = { title, contents: contentList };

    const post = await Post.findOne({ _id: postId }).populate("author");
    if (post.author.id !== id) {
      throw new Error("불일치");
    }
    await post.updateOne({ $set: postData });
    res.json({ isOk: true, message: "수정 완료" });
  } catch (err) {
    console.log(err);
    res.json({ isOk: false, message: "수정 실패", err });
  }
});

// Delete
router.delete("/:postId", auth, async function (req, res) {
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

    res.status(200).json({ isok: true, comments: comments });
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
      { $push: { comments: comment } },
    );

    res.status(200).json({ isOk: true, message: "댓글작성 완료" });
  } catch (err) {
    res.status(400).json({ isOk: false, message: "댓글작성 실패" });
    return;
  }
});

// 댓글수정
// 배열인 경우 pull push는 알겠는데 중간값을 수정하는 방법을 모르겠다..😥
router.put("/:postId/comment/:commentId", async (req, res) => {
  try {
    const { content } = req.body;
    const { postId, commentId } = req.params;
    const posts = await Post.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $set: { "comments.$[el].content": content },
      },
      {
        arrayFilters: [{ "el._id": commentId }],
      },
    );
    res.status(200).json({ isOk: true, message: "댓글 수정완료" });
  } catch (err) {
    res.status(400).json({ isOk: false, message: "댓글 수정 실패" });
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

    res.status(200).json({ isOk: true, message: "댓글이 삭제되었습니다." });
  } catch (err) {
    res.status(400).json({ isOk: false, message: "댓글 삭제 실패" });
  }
});

module.exports = router;

module.exports = router;
