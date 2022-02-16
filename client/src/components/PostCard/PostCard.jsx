<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 00b57de03b6e8e39192df7a05e869f23defc8e17
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

<<<<<<< HEAD
export function PostCard({
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
=======
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
>>>>>>> 00b57de03b6e8e39192df7a05e869f23defc8e17
        </Like>
      </ContentBox>
    </PostCardArticle>
  );
}
