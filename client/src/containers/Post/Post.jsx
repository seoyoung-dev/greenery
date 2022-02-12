import React from "react";
import PostForm from "../../components/PostForm";
import Header from "../../components/Header";

import { PostWrapper } from "./Post.style";

export function Post() {
  return (
    <PostWrapper>
      <Header />
      <PostForm />
    </PostWrapper>
  );
}
