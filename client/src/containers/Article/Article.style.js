import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostArticleWrapper = styled.div`
  width: 720px;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
