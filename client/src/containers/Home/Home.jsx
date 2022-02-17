import { useState, useEffect } from "react";
import axios from "axios";
import Header from "components/Header";
import TodaysPlant from "components/TodaysPlant";
import PostCard from "components/PostCard";
import ImgCard from "components/ImgCard";
import Footer from "components/Footer";
import {
  Main,
  PostContentsWrapper,
  Title,
  PostCardBox,
  StyledLink,
} from "./Home.style";

export default function Home() {
  const [plantData, setPlantData] = useState();
  const [cardData, setCardData] = useState();

  async function getPlantData() {
    const response = await axios.get("/api/todays/article");
    setPlantData(response.data);
  }

  async function getCardData() {
    const response = await axios.get("/api/posts/popularity");
    setCardData(response.data);
  }

  function fetchData() {
    Promise.all([getPlantData(), getCardData()]).catch(error =>
      console.log(error.message),
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Main>
      <Header />
      {plantData && (
        <TodaysPlant
          imgUrl={plantData.imgUrl}
          content={plantData.content}
          postId={plantData.postId}
        />
      )}
      <PostContentsWrapper>
        <Title>
          <span>많이 본 초록이들</span>
          <StyledLink to="/community">더 많은 초록이들 보기</StyledLink>
        </Title>
        <PostCardBox>
          {cardData &&
            cardData.posts.map(card => (
              <PostCard
                key={card.id}
                postImgUrl={card.postImgUrl}
                title={card.title}
                profileImgUrl={card.author.profileImg}
                author={card.author.name}
                likeNum={card.likes}
              />
            ))}
        </PostCardBox>
      </PostContentsWrapper>
      <ImgCard />
      <Footer />
    </Main>
  );
}
