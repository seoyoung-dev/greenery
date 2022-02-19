import { Main, PostArticleWrapper } from "./Article.style";
import { Header, SideBar, PostArticle, Comment } from "components";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { userProfileState } from "Atoms";
import { useRecoilValue } from "recoil";

export default function Article() {
  const [article, setArticle] = useState({});
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const navigate = useNavigate();
  const { postId } = useParams();
  const commentRef = useRef(null);
  const userProfile = useRecoilValue(userProfileState);

  const scrollToComment = () => {
    commentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleLikeClick = async () => {
    const res = await axios.put(`/api/posts/${postId}/like`);
    console.log(res.data);
    setLikes(res.data.likes);
    if (res.status === 200) setLiked(!liked);
  };

  const handleCommentClick = async () => {
    scrollToComment();
  };

  const handleUpdateClick = async () => {
    const response = await axios.get(`/api/posts?postId=${postId}`);
    if (response.data.post.author._id !== userProfile.id) {
      alert("게시글의 작성자가 아닙니다.");
    }
    if (response.data.post.author._id === userProfile.id) {
      navigate(`/post/${postId}`);
    }
  };
  const handleTrashClick = async () => {
    const response = await axios.get(`/api/posts?postId=${postId}`);
    if (response.data.post.author._id !== userProfile.id) {
      alert("게시글의 작성자가 아닙니다.");
    }
    if (response.data.post.author._id === userProfile.id) {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/community");
    }
  };

  const getPost = async () => {
    const res = await axios.get(`/api/posts/?postId=${postId}`, {
      params: { user: userProfile.id },
    });
    console.log(res.data.post);
    setArticle(res.data.post);
    setLiked(res.data.post.liked);
    setLikes(res.data.post.likes);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Main>
      <Header />

      <PostArticleWrapper>
        {article.author && (
          <PostArticle
            title={article.title}
            profileImgUrl={article.author.profileImg}
            author={article.author.name}
            date={article.createdAt}
            likeNum={likes}
            contents={article.contents}
          />
        )}
        {article.author && (
          <SideBar
            likeHandler={handleLikeClick}
            commentHandler={handleCommentClick}
            trashHandler={handleTrashClick}
            postId={postId}
            updateHandler={handleUpdateClick}
            userId={userProfile.id}
            PostUserId={article.author}
            liked={liked}
          />
        )}
        <div ref={commentRef} />
        <Comment />
      </PostArticleWrapper>
    </Main>
  );
}
