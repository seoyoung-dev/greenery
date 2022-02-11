import React from "react";
import {
  ArticleWrapper,
  ArticleTitle,
  PostInfo,
  DetailedInfo,
  Like,
  ContentBox,
  Content,
} from "./PostArticle.style";
import { useParams } from "react-router-dom";

export default function PostArticle({
  title,
  profileImgUrl,
  author,
  date,
  likeNum,
  contents,
}) {
  const { postId } = useParams();
  console.log(postId);
  return (
    <ArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <PostInfo>
        <img src={profileImgUrl} alt={"프로필 이미지"}></img>
        <DetailedInfo>
          <p>{author}</p>
          <div>
            <p>{date}</p>
            <Like>
              <img src={"icon/thumbs-up.svg"} alt="좋아요 수" />
              <p>{likeNum}</p>
            </Like>
          </div>
        </DetailedInfo>
      </PostInfo>
      <ContentBox>
        {contents.map((card, i) => (
          <Content key={`content-${i}`}>
            <img src={card.imgUrl} alt="포스트 이미지"></img>
            <p>{card.content}</p>
          </Content>
        ))}
      </ContentBox>
    </ArticleWrapper>
  );
}
