import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import TodaysPlant from "../../components/TodaysPlant";
import PostCard from "../../components/PostCard";
import ImgCard from "../../components/ImgCard";
import Footer from "../../components/Footer";
import {
  Main,
  PostContentsWrapper,
  Title,
  PostCardBox,
  StyledLink,
} from "./Home.style";

export default function Home() {
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    async function fetchPostData() {
      const response = await axios
        .get("/api/posts/popularity")
        .catch(err => console.log("Err ", err));
      setPostsData(response.data);
    }
    fetchPostData();
  }, []);

  return (
    <Main>
      <Header />
      <TodaysPlant />
      <PostContentsWrapper>
        <Title>
          <span>많이 본 초록이들</span>
          <StyledLink to="/community">더 많은 초록이들 보기</StyledLink>
        </Title>
        <PostCardBox>
          {postsData &&
            postsData.posts.map(card => (
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
