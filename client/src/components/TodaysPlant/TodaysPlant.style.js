import { Link } from "react-router-dom";
import styled from "styled-components";

export const TodaysPlantSection = styled.section`
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
  margin-top: 150px;

  h3 {
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
    margin-right: 40px;
    border-radius: 10px;
  }

  & > p {
    width: 70%;
    padding: 0 40px;
    border-left: 1px solid #dbdbdb;
    font-size: 20px;
    line-height: 36px;
  }
`;

export const TodaysLink = styled(Link)`
  color: #000;
  font-weight: bold;
`;
