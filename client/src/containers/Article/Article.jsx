import { Main, PostArticleWrapper } from "./Article.style";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import PostArticle from "../../components/PostArticle";
import Comment from "../../components/Comment";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Article() {
  const [article, setArticle] = useState({});
  const { postId } = useParams();
  const commentRef = useRef(null);

  const scrollToBottom = () => {
    commentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleLikeClick = async () => {
    console.log("Like");
  };

  const handleCommentClick = async () => {
    console.log("댓글");
    scrollToBottom();
  };

  const handleTrashClick = async () => {
    await axios.delete(`/api/posts/${postId}`);
    console.log("삭제");
    window.location.reload();
  };

  const getPost = () => {
    axios
      .get(`/api/posts?postId=${postId}`)
      .then(res => {
        console.log(res);
        setArticle(res.data.post);
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
        {/* {console.log(Boolean(article))}
        {console.log(article.author)} */}
        {article.author && (
          <PostArticle
            title={article.title}
            profileImgUrl={article.author.profileImg}
            author={article.author.name}
            date={article.createdAt}
            likeNum={article.likes || 0}
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
