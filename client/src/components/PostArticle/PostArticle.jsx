import { useParams } from "react-router-dom";
import {
  ArticleWrapper,
  ArticleTitle,
  PostInfo,
  DetailedInfo,
  Like,
  ContentBox,
  Content,
} from "./PostArticle.style";

export default function PostArticle({
  title,
  profileImgUrl,
  author,
  date,
  likeNum,
  contents,
}) {
  // postId를 get 요청 url에 사용예정
  const { postId } = useParams();
  return (
    <ArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <PostInfo>
        <img src={`${profileImgUrl}`} alt="프로필 이미지"></img>
        <DetailedInfo>
          <p>{author}</p>
          <div>
            <p>{date}</p>
            <Like>
              <img src="/icon/thumbs-up.svg" alt="좋아요 수" />
              <div>{likeNum}</div>
            </Like>
          </div>
        </DetailedInfo>
      </PostInfo>
      <ContentBox>
        {contents.map((card, index) => (
          <Content key={`content-${index}`}>
            <img src={`${card.imgUrl}`} alt="포스트 이미지"></img>
            <p>{card.content}</p>
          </Content>
        ))}
      </ContentBox>
    </ArticleWrapper>
  );
}
