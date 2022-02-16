import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
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

export default function PostCard({
  postImgUrl,
  title,
  profileImgUrl,
  author,
  likeNum,
}) {
  return (
    <PostCardArticle>
      <ImgWrapper>
        <img src={postImgUrl || dummy.postImgUrl} alt="포스트 이미지" />
      </ImgWrapper>
      <h3>{title || dummy.title}</h3>
      <ContentBox>
        <Profile>
          <img src={profileImgUrl || dummy.profileImgUrl} alt="프로필 이미지" />
          <span>{author || dummy.author}</span>
        </Profile>
        <Like>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{likeNum || dummy.likeNum}</span>
        </Like>
      </ContentBox>
    </PostCardArticle>
  );
}
