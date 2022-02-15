import React from "react";
import Header from "../../components/Header";
import TodaysPlant from "../../components/TodaysPlant";
import PostCard from "../../components/PostCard";
import ImgCard from "../../components/ImgCard";
import Footer from "../../components/Footer";
import {
  Main,
  PostContentsWrapper,
  Title,
  PostCardBox,
  StyledLink,
} from "./Home.style";

const dummy = [
  {
    postId: 1,
    postImgUrl: "img/post.png",
    title: "안녕 나는 첫번째 데이터야",
    profileImgUrl: "img/profile.png",
    author: "first-elice",
    likeNum: 11111,
  },
  {
    postId: 2,
    postImgUrl: "img/post.png",
    title: "안녕 나는 두번째 데이터야",
    profileImgUrl: "img/profile.png",
    author: "second-elice",
    likeNum: 22222,
  },
  {
    postId: 3,
    postImgUrl: "img/post.png",
    title: "안녕 나는 세번째 데이터야",
    profileImgUrl: "img/profile.png",
    author: "third-elice",
    likeNum: 33333,
  },
];

export default function Home() {
  return (
    <Main>
      <Header />
      <TodaysPlant />
      <PostContentsWrapper>
        <Title>
          <span>많이 본 초록이들</span>
          <StyledLink to="/community">더 많은 초록이들 보기</StyledLink>
        </Title>
        <PostCardBox>
          {dummy.map(card => (
            <PostCard
              key={card.postId}
              postImgUrl={card.postImgUrl}
              title={card.title}
              profileImgUrl={card.profileImgUrl}
              author={card.author}
              likeNum={card.likeNum}
            />
          ))}
        </PostCardBox>
      </PostContentsWrapper>
      <ImgCard />
      <Footer />
    </Main>
  );
}
