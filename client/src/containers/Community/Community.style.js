import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 1136px;
  margin: 40px auto 0 auto;

  & input {
    width: 330px;
    height: 46px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    outline: none;
  }

  & input::placeholder {
    padding-left: 16px;
    font-size: 16px;
    font-weight: light;
    font-family: FontAwesome;
    color: rgba(118, 118, 118, 0.8);
  }
`;

export const ContentsWrapper = styled.section`
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-gap: 80px 28px;
  margin-top: 40px;
`;
