import { Main, PostArticleWrapper } from "./Article.style";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import PostArticle from "../../components/PostArticle";
import Comment from "../../components/Comment";
import React, { useState, useEffect } from "react";
import axios from "axios";

const dummy = {
  postId: 54321,
  title: "제목입니다.",
  profileImgUrl: "img/profile.png",
  author: "elice",
  date: "2022년 01월 27일",
  likeNum: 4876,
  contents: [
    {
      content:
        "우리 초록이는 정말 이뻐요 27세 회사원 박민재 씨는 화분에 담긴 ‘초록이’를 입양했다. 박 씨는 ‘초록이’가 비실비실해 보일 때면 마음이 쓰이고 쑥쑥 자라는 모습을 보면 뿌듯하다고 한다.",
      imgUrl: "img/article-sample01.png",
    },
    {
      content:
        "실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다.",
      imgUrl: "img/article-sample02.png",
    },
  ],
};

export default function Article(props) {
  const [article, setArticle] = useState({});
  console.log(props.postId);
  const getPost = postId => {
    axios
      .get("/api/posts", { params: { postId } })
      .then(res => {
        console.log(res);
        setArticle(res.data.post);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(props.postId);
    props.postId && getPost(props.postId);
  }, []);

  return (
    <Main>
      <Header />
      {/* {console.log(article)} */}

      <PostArticleWrapper>
        {console.log(Boolean(article))}
        {console.log(article.author)}
        {article.author && (
          <PostArticle
            title={article.title || dummy.title}
            profileImgUrl={article.author.profileImg || dummy.profileImgUrl}
            author={article.author.name || dummy.author}
            date={article.createdAt || dummy.date}
            likeNum={article.likes || 0}
            contents={article.contents || dummy.contents}
          />
        )}
        <SideBar />
      </PostArticleWrapper>
      <Comment />
    </Main>
  );
}
