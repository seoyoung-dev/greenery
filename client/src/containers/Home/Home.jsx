import React from "react";
import { Main, PostContentsWrapper, Title, PostCardBox } from "./Home.style";
import TodaysPlant from "../../components/TodaysPlant";
import PostCard from "../../components/PostCard";
import ImgCard from "../../components/ImgCard";

const dummy = [
  {
    postId: 1,
    postImgUrl: "img/post.png",
    title: "안녕 나는 첫번째 데이터야",
    profileImgUrl: "img/profile.png",
    author: "elice-one",
    likeNum: 11111,
  },
  {
    postId: 2,
    postImgUrl: "img/post.png",
    title: "안녕 나는 두번째 데이터야",
    profileImgUrl: "img/profile.png",
    author: "elice-two",
    likeNum: 22222,
  },
  {
    postId: 3,
    postImgUrl: "img/post.png",
    title: "안녕 나는 세번째 데이터야",
    profileImgUrl: "img/profile.png",
    author: "elice-three",
    likeNum: 33333,
  },
];

export function Home() {
  return (
    <Main>
      <TodaysPlant />
      <PostContentsWrapper>
        <Title>
          <span>많이 본 초록이들</span>
          <span>더 많은 초록이들 보기</span>
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
    </Main>
  );
}
