import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { WideContainer } from "style/ContainerStyle";
import { Main, ContentsWrapper, PostButtonWrapper } from "./Community.style";

import { Header, Footer, PostCard } from "components";
import axios from "axios";

export function Community() {
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const intersectionRef = useRef(null);

  const handleObserver = useCallback(async entires => {
    const target = entires[0];
    //
    if (target.isIntersecting) {
      setPageNum(prev => prev + 1);
    }
  }, []);

  const options = {
    root: null, // 관찰대상의 부모요소
    rootMargin: "100px", // 뷰포트의 마진
    threshold: 0.5, // 0 ~ 1 겹치는 정도
  };

  const getPosts = async pageNum => {
    const url = `/posts/page/${pageNum}`;
    const response = await axios.get(url);

    setPosts(prev => {
      const newPosts = [...prev, ...response.data.posts];
      return newPosts;
    });
  };

  // useEffect 안의 return 은 컴포넌트가 unmount될 때 (사라질 때) 실행되는 함수이며 청소하는 용도로 사용한다.
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    getPosts(pageNum);
  }, [pageNum]);

  return (
    <WideContainer>
      <Header />
      <Main>
        <input type="text" placeholder="&#xF002; 검색어를 입력하세요" />
        <ContentsWrapper>
          {posts &&
            posts.map(({ id, title, author, contents }, index) => {
              return (
                <PostCard
                  key={index}
                  title={title}
                  author={author}
                  contents={contents}
                />
              );
            })}
          <div ref={intersectionRef}>target</div>
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
