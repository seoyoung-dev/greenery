import React, { useState } from "react";
import PostForm from "../../components/PostForm";
import { PostTitle, CotentAddButton, PostArticle } from "./Post.style";

export function Post() {
  const [formCount, setFormCount] = useState(1);

  const rendering = () => {
    const result = [];
    for (let i = 0; i < formCount; i++) {
      result.push(<PostForm />);
    }
    return result;
  };

  return (
    <PostArticle>
      <PostTitle placeholder="제목을 입력해주세요." />
      {rendering()}
      <CotentAddButton onClick={() => setFormCount(formCount + 1)}>
        추가하기
      </CotentAddButton>
    </PostArticle>
  );
}
