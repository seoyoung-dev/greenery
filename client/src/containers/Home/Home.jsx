import React from "react";
import { Main } from "./Home.style";
import PostCardBox from "../../components/PostCardBox";
import ImgCard from "../../components/ImgCard";

export function Home() {
  return (
    <Main>
      <PostCardBox />
      <ImgCard />
    </Main>
  );
}
