import { TodaysPlantSection, ContentBox } from "./TodaysPlant.style";
import { Link } from "react-router-dom";

const dummy = {
  image:
    "https://cdn.imweb.me/upload/S201905295cee7c0f94cee/12d4d58e92dd7.jpeg",
  text: "오늘의 초록친구는 이원형님의 ‘오뚝이’ 입니다. 오뚝이는 원형님과 함께 한지 2년된 호호노롤종 식물이에요. 노랑색과 자연스럽게 어우러진 담녹빛 잎이 정말 사랑스럽네요!",
  author: "원형",
};

export default function TodaysPlant({ imgUrl, linkUrl, author }) {
  return (
    <TodaysPlantSection>
      <h3>오늘의 초록이</h3>
      <ContentBox>
        <img src={imgUrl || dummy.image} alt="" />
        <p>
          {dummy.text} <br />
          {author || dummy.author}님의 정원이 궁금하시다면,{" "}
          <Link to={linkUrl || "/"}>여기</Link>를 눌러주세요
        </p>
      </ContentBox>
    </TodaysPlantSection>
  );
}
