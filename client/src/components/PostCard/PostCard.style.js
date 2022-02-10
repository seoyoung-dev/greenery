import styled from "styled-components";

export const PostCardArticle = styled.article`
  display: flex;
  flex-direction: column;

  & h3 {
    margin: 16px 0 10px 10px;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImgWrapper = styled.div`
  width: 360px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;

  & img {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }

  &:hover img {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 22px;
    height: 22px;
    margin-right: 6px;
    border-radius: 100px;
  }

  & span {
    margin-bottom: 2px;
    font-size: 14px;
  }
`;

export const Like = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #767676;

  & span {
    margin-left: 3px;
  }
`;
