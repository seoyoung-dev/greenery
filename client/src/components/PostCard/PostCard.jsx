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
  id,
  title,
  author = { name: "kim", profileImg: "/img/profile.png" },
  contents = [{ content: "내용 1", imgUrl: "/img/profile.png" }],
  likeNum,
}) {
  const postImgUrl = contents[0].imgUrl;
  const profileImgUrl = author.profileImg;
  const name = author.name;

  return (
    <PostCardArticle>
      <ImgWrapper>
        <img src={postImgUrl} alt="포스트 이미지" />
      </ImgWrapper>
      <h3>{title}</h3>
      <ContentBox>
        <Profile>
          <img src={profileImgUrl} alt="프로필 이미지" />
          <span>{name}</span>
        </Profile>
        <Like>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{likeNum}</span>
        </Like>
      </ContentBox>
    </PostCardArticle>
  );
}
