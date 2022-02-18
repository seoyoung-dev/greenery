import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { WideContainer } from "style/ContainerStyle";
import {
  Main,
  ContentsWrapper,
  PostButtonWrapper,
  SearchInput,
} from "./Community.style";
import { Header, Footer, PostCard } from "components";

import axios from "axios";

export function Community() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef(null);
  const searchRef = useRef();

  const getPosts = async page => {
    const url = `/api/posts/page`;
    const { data } = await axios.get(url, {
      params: { page, keyword: searchRef.current.value },
    });
    // lastPage = Math.ceil(data.total / 12);
    setPosts(prev => {
      const newPosts = [...prev, ...data.posts];
      return newPosts;
    });
    setLoading(true);
  };

  useEffect(() => {
    getPosts(page);
  }, [page]);

  const increasePage = () => {
    setPage(prev => prev + 1);
  };

  const ovserveHandler = useCallback(entires => {
    if (entires[0].isIntersecting) {
      increasePage();
    }
  }, []);

  const searchSubmitHandler = e => {
    e.preventDefault();
    // setLoading(false);
    // setPosts([]);
    // setPage(1);
    // getPosts(1);
  };

  useEffect(() => {
    // if (true) {
    const observer = new IntersectionObserver(ovserveHandler, {
      threshold: 1,
    });
    observer.observe(pageEnd.current);
    // }
  }, []);

  console.log(page);

  return (
    <>
      <Header />
      <Main>
        <WideContainer>
          <SearchInput onSubmit={searchSubmitHandler}>
            <input
              ref={searchRef}
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <img src="/icon/search.svg" alt="" />
          </SearchInput>
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
            <div ref={pageEnd} style={{ position: "hidden" }}></div>
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
