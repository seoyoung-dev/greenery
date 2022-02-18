import { Main, PostArticleWrapper } from "./Article.style";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import PostArticle from "../../components/PostArticle";
import Comment from "../../components/Comment";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { userProfileState } from "Atoms";
import { useRecoilValue } from "recoil";

export default function Article() {
  const [article, setArticle] = useState({});
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const { postId } = useParams();
  const commentRef = useRef(null);
  const userProfile = useRecoilValue(userProfileState);

  const scrollToComment = () => {
    commentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleLikeClick = async () => {
    const res = await axios.put(`/api/posts/${postId}/like`, {
      userId: userProfile.id,
    });
    setLikes(res.data.likse);
    if (res.status === 200) setLiked(!liked);
  };

  const handleCommentClick = async () => {
    scrollToComment();
  };

  const handleTrashClick = async () => {
    await axios.delete(`/api/posts/${postId}`);
    window.location.reload();
  };

  const getPost = () => {
    axios
      .get(`/api/posts?postId=${postId}`)
      .then(res => {
        setArticle(res.data.post);
        setLiked(res.data.post.liked);
      })
      .catch(err => {
        console.log(err);
      });
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
            likeNum={likes || 0}
            contents={article.contents}
          />
        )}
        <SideBar
          likeHandler={handleLikeClick}
          commentHandler={handleCommentClick}
          trashHandler={handleTrashClick}
          postId={postId}
        />
      </PostArticleWrapper>
      <div ref={commentRef} />
      <Comment />
    </Main>
  );
}
