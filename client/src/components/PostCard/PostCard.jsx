import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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

export default function PostCard({ id, imgUrl, title, author, likes }) {
  const { name, profileImg } = author;

  return (
    <PostCardArticle>
      <Link to={`/article/${id}`}>
        <ImgWrapper>
          <img src={imgUrl} alt="포스트 이미지" />
        </ImgWrapper>
        <h3>{title}</h3>
        <ContentBox>
          <Profile>
            <img src={profileImg} alt="프로필 이미지" />
            <span>{name}</span>
          </Profile>
          <Like>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{likes}</span>
          </Like>
        </ContentBox>
      </Link>
    </PostCardArticle>
  );
}
