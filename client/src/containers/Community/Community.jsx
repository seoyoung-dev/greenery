import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { WideContainer } from "style/ContainerStyle";
import { Main, ContentsWrapper, PostButtonWrapper } from "./Community.style";

import { Header, Footer, PostCard } from "components";
import axios from "axios";

export function Community() {
  const [posts, setPosts] = useState([]);
  const [page, setPageNum] = useState(1);
  const intersectionRef = useRef(null);

  const getPosts = useCallback(async page => {
    const url = `api/posts/page?page=${page}`;
    const response = await axios.get(url, {
      query: { page },
    });
    setPosts(prev => {
      const newPosts = [...prev, ...response.data.posts];
      return newPosts;
    });
  }, []);

  const options = {
    root: null, // 관찰대상의 부모요소
    rootMargin: "300px", // 뷰포트의 마진
    threshold: 1, // 0 ~ 1 겹치는 정도
  };

  const handleObserver = useCallback(async entires => {
    const target = entires[0];
    if (target.isIntersecting) {
      setPageNum(prev => prev + 1);
    }
    return;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    getPosts(page);
  }, [page]);

  return (
    <>
      <Header />
      <Main>
        <WideContainer>
          <input type="text" placeholder="&#xF002; 검색어를 입력하세요" />
          <ContentsWrapper>
            {posts &&
              posts.map(({ id, title, imgUrl, likes, author }, index) => {
                return (
                  <PostCard
                    key={index}
                    id={id}
                    imgUrl={imgUrl}
                    title={title}
                    author={author}
                    likes={likes}
                  />
                );
              })}
            <div ref={intersectionRef} style={{ position: "hidden" }}></div>
          </ContentsWrapper>
          <PostButtonWrapper>
            <Link to="/post">
              <img src="/img/postIcon.png" alt="글쓰기 버튼" />
            </Link>
          </PostButtonWrapper>
        </WideContainer>
      </Main>
      <Footer />
    </>
  );
}
