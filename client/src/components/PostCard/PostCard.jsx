import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  PostCardArticle,
  ImgWrapper,
  ContentBox,
  Profile,
  Like,
} from "./PostCard.style";

const dummy = {
  postImgUrl: "img/post.png",
  title: "함께 한지 2년된 호호노롤종",
  profileImgUrl: "img/profile.png",
  author: "elice",
  likeNum: 4876,
};

export default function PostCard({ id, imgUrl, title, author, likeNum }) {
  const { name, profileImg } = author;

  return (
    <Link to={`/article/?postId=${id}`}>
      <PostCardArticle>
        <ImgWrapper>
          <img src={imgUrl || dummy.postImgUrl} alt="포스트 이미지" />
        </ImgWrapper>
        <h3>{title || dummy.title}</h3>
        <ContentBox>
          <Profile>
            <img src={profileImg} alt="프로필 이미지" />
            <span>{name || dummy.author}</span>
          </Profile>
          <Like>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{likeNum}</span>
          </Like>
        </ContentBox>
      </PostCardArticle>
    </Link>
  );
}
