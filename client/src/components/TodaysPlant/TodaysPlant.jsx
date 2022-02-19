import { text } from "@fortawesome/fontawesome-svg-core";
import {
  TodaysPlantSection,
  ContentBox,
  TodaysLink,
} from "./TodaysPlant.style";

export default function TodaysPlant({ imgUrl, content, postId }) {
  const translateContent = content => {
    const newContent = content.split("**");
    return newContent.map((text, idx) => {
      if (idx % 2 === 1) {
        return <strong>{text}</strong>;
      }
      return text;
    });
  };
  return (
    <TodaysPlantSection>
      <h3>오늘의 초록이</h3>
      <ContentBox>
        <img src={imgUrl} alt="인기 식물 사진" />
        <p>
          {translateContent(content)}
          <TodaysLink to={`/article/${postId}`}>여기</TodaysLink>를 눌러주세요
        </p>
      </ContentBox>
    </TodaysPlantSection>
  );
}
