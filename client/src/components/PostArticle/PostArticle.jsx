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

const dummy = {
  title: "제목입니다.",
  profileImgUrl: "img/profile.png",
  author: "elice",
  date: "2022년 01월 27일",
  likeNum: 4876,
  contents: [
    {
      content:
        "우리 초록이는 정말 이뻐요 27세 회사원 박민재 씨는 화분에 담긴 ‘초록이’를 입양했다. 박 씨는 ‘초록이’가 비실비실해 보일 때면 마음이 쓰이고 쑥쑥 자라는 모습을 보면 뿌듯하다고 한다.",
      imgUrl: "img/post.png",
    },
    {
      content:
        "실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다. 실제 식물을 기르는 사람들은 “관리와 애정이 필요하고 주인의 손길에 따라 자랄 수도 죽을 수도 있다”는 점에서 반려동물과 다를 바가 없다고 주장한다.",
      imgUrl: "img/plant.png",
    },
  ],
};
export function PostArticle() {
  return (
    <ArticleWrapper>
      <ArticleTitle>{dummy.title}</ArticleTitle>
      <PostInfo>
        <img src={dummy.profileImgUrl} alt={"프로필 이미지"}></img>
        <DetailedInfo>
          <p>{dummy.author}</p>
          <div>
            <p>{dummy.date}</p>
            <Like>
              <img src={"icon/thumbs-up.svg"} alt="좋아요 수" />
              <p>{dummy.likeNum}</p>
            </Like>
          </div>
        </DetailedInfo>
      </PostInfo>
      <ContentBox>
        {dummy.contents.map(card => (
          <Content>
            <img src={card.imgUrl} alt="포스트 이미지"></img>
            <p>{card.content}</p>
          </Content>
        ))}
      </ContentBox>
    </ArticleWrapper>
  );
}
