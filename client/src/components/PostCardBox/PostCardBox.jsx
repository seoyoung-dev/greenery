import React from "react";
import { Title, PostCardWrapper } from "./PostCardBox.style";
import PostCard from "../PostCard";

export default function PostCardBox() {
  return (
    <>
      <Title>
        <span>많이 본 초록이들</span>
        <span>더 많은 초록이들 보기</span>
      </Title>
      <PostCardWrapper>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </PostCardWrapper>
    </>
  );
}
