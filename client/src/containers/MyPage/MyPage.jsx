import React, { useState, useEffect, useRef } from "react";
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
  const [prevClick, setPrevClick] = React.useState(null);

  const GetClick = e => {
    setCurrentClick(e.target.id);
    // console.log(e.target.id);
  };

  useEffect(
    e => {
      currentClick === "MyPosts"
        ? console.log("MyPosts")
        : console.log("LikedPosts");
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        console.log(current);
        current.style.color = "var(--primary)";
        current.style.boxShadow = "0px 4px 0px var(--primary)";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.color = "#000000";
        prev.style.boxShadow = "none";
      }
      setPrevClick(currentClick);
    },
    [currentClick],
  );

  return (
    <ProfileWrapper>
      <Header />
      <ProfileImg>
        <img src="/img/profile2.png" />
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
        <PostCard />
        <PostCard />
        <PostCard id="123" />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardsWrapper>
    </ProfileWrapper>
  );
}
