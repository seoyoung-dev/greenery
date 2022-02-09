import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PostContentsWrapper = styled.div`
  width: 1136px;
  margin: 80px 0 100px 0;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;

  & span {
    font-size: 20px;
    font-weight: bold;
  }

  & :nth-child(2) {
    font-size: 14px;
    color: #767676;
  }
`;

export const PostCardBox = styled.div`
  display: flex;
  width: 1136px;
  justify-content: space-between;
`;
