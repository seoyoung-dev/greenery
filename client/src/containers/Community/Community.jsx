import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WideContainer } from "style/ContainerStyle";
import { Main, ContentsWrapper, PostButtonWrapper } from "./Community.style";

import { Header, Footer, PostCard } from "components";
import axios from "axios";

export function Community() {
  const [posts, setPosts] = useState([]);

  console.log(posts);
  const getPosts = async () => {
    const pageNumber = 1;
    const url = `/posts/page/1`;

    const response = await axios.get(url);
    setPosts(response.data.newPosts);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <WideContainer>
      <Header />
      <Main>
        <input type="text" placeholder="&#xF002;   검색어를 입력하세요" />
        <ContentsWrapper>
          {posts.map(({ id, title, author, contents }) => {
            return (
              <PostCard
                key={id}
                title={title}
                author={author}
                contents={contents}
              />
            );
          })}
        </ContentsWrapper>
        <PostButtonWrapper>
          <Link to="/post">
            <img src="/img/postIcon.png" alt="글쓰기 버튼" />
          </Link>
        </PostButtonWrapper>
      </Main>
      <Footer />
    </WideContainer>
  );
}
