import styled from "styled-components";

export const TodaysPlantSection = styled.section`
  font-family: "Noto Sans KR", sans-serif;
  font-family: "Noto Serif KR", serif;
  width: 1140px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(222, 249, 246, 1) 0%,
    rgba(249, 235, 222, 1) 100%
  );
  padding: 48px 60px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  & h3 {
    margin: 0;
    padding: 0 40px 30px;
    font-size: 28px;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;

  & img {
    width: 30%;
    padding-right: 40px;
    border-right: 1px solid #dbdbdb;
  }

  & p {
    padding: 0 40px;
    margin: 0px;
    font-size: 20px;
    line-height: 36px;
  }
`;
