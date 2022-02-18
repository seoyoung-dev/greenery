import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PostContentsWrapper = styled.div`
  width: 1136px;
  margin: 80px 0 100px 0;

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    width: 100%;
    padding: 5%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 3%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const PostCardBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow-x: scroll;
  white-space: wrap;

  &{PostCard} {
    & + & {
      margin-left: 200px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #767676;
`;
