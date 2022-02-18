import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "components/Header";
import axios from "axios";
import {
  ProfileWrapper,
  ProfileImg,
  PostCardsWrapper,
  PostCardborder,
  Nickname,
  MyPost,
} from "./MyPage.style";
import PostCard from "components/PostCard";
import { userProfileState } from "Atoms";
import { useRecoilValue } from "recoil";

export function MyPage() {
  const userProfile = useRecoilValue(userProfileState);

  const [currentClick, setCurrentClick] = useState("MyPosts");
  const [prevClick, setPrevClick] = useState(null);

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [likePosts, setLikePosts] = useState([]);
  const [likePageNumber, setLikePageNumber] = useState(1);

  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();

  const GetClick = e => {
    setCurrentClick(e.target.id);
  };

  const getMyPost = async page => {
    const url = "/api/users/post/";
    const response = await axios.get(url, {
      params: {
        page: page,
        userId: userProfile.id,
      },
    });
    setPosts(prev => {
      const newPosts = [...prev, ...response.data.posts];
      return newPosts;
    });
    setLoading(true);
  };

  const getMyLikePost = async page => {
    const url = "/api/posts/page";
    const response = await axios.get(url, {
      params: {
        page: page,
      },
    });
    const resPosts = response.data.posts;
    const newResPosts = resPosts.filter(post => post.liked);

    setLikePosts(prev => {
      const newPosts = [...prev, ...newResPosts];
      return newPosts;
    });
    setLoading(true);
  };

  useEffect(() => {
    getMyPost(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    getMyLikePost(likePageNumber);
  }, [likePageNumber]);

  const loadMore = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  useEffect(() => {
    // fetchFeed 함수에서 loading 값이 true로 바뀐다면
    if (loading) {
      // new 생성자로 IntersectionObserver 객체를 활용해서 observer를 생성하고
      const observer = new IntersectionObserver(
        // entries를 인자로 받는 콜백함수에서
        entries => {
          // 인스턴스의 배열의 첫번째 값이 IntersectionObserverEntry
          // 관찰 대상의 교차 상태가 true라면
          if (entries[0].isIntersecting) {
            // loadMore함수 호출
            loadMore();
          }
        },
        // threshold는 옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시
        // 100%일 때 옵저버 실행
        { threshold: 1 },
      );
      // 관찰할 대상 등록
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  useEffect(() => {
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      current.style.color = "var(--primary)";
      current.style.boxShadow = "0px 4px 0px var(--primary)";
    }

    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "#000000";
      prev.style.boxShadow = "none";
    }
    setPrevClick(currentClick);
  }, [currentClick]);

  return (
    <ProfileWrapper>
      <Header />

      <ProfileImg>
        <img src={userProfile.profileImg} />
      </ProfileImg>
      <Nickname>{userProfile.name}</Nickname>
      <MyPost>
        <ul>
          <li>
            <button id="MyPosts" onClick={GetClick}>
              내가 작성한 글
            </button>
          </li>
          <li>
            <button id="LikePosts" onClick={GetClick}>
              좋아요 한 글
            </button>
          </li>
        </ul>
      </MyPost>
      <PostCardborder />

      <PostCardsWrapper>
        {currentClick === "MyPosts" &&
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

        {currentClick === "LikePosts" &&
          likePosts.map(({ id, title, imgUrl, likes, author }, index) => {
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
      </PostCardsWrapper>
    </ProfileWrapper>
  );
}
