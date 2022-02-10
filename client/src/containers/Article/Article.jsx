import React from "react";
import { Main } from "./Article.style";
import SideBar from "../../components/SideBar";
import PostArticle from "../../components/PostArticle";

export function Article() {
  return (
    <Main>
      <PostArticle />
      <SideBar />
    </Main>
  );
}
