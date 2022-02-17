import { useState, useEffect } from "react";
import {
  Main,
  PostContentsWrapper,
  Title,
  PostCardBox,
  StyledLink,
} from "./Home.style";
import { Header, TodaysPlant, PostCard, ImgCard, Footer } from "components";

import axios from "axios";

export default function Home() {
  const [plantData, setPlantData] = useState();
  const [cardData, setCardData] = useState();
  console.log(cardData);
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
            cardData.posts.map(({ id, imgUrl, title, author, likes }) => (
              <PostCard
                key={id}
                id={id}
                imgUrl={imgUrl}
                title={title}
                author={author}
                likes={likes}
              />
            ))}
        </PostCardBox>
      </PostContentsWrapper>
      <ImgCard />
      <Footer />
    </Main>
  );
}
