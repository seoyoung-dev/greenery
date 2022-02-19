import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 0 auto;
  padding: 90px 0 0 0;

  @media screen and (max-width: 1150px) {
    display: grid;
    padding: 90px 0 0 0;
  }
  @media screen and (max-width: 760px) {
    padding: 40px 0 0 0;
  }
`;

export const ContentsWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-gap: 80px 28px;
  margin: 40px auto 0 auto;
  min-height: 90vh;

  @media screen and (min-width: 432px) and (max-width: 1150px) {
    display: grid;
    justify-content: center;
    grid-template-columns: 360px 360px;
  }

  @media screen and (max-width: 760px) {
    justify-content: center;
    grid-template-columns: 360px;
  }
`;

export const PostButtonWrapper = styled.div`
  max-width: 80px;
  position: fixed;
  z-index: 50;
  right: 15vw;
  bottom: 5vh;

  & img {
    border-radius: 50%;
    max-width: 100%;
  }

  @media screen and (max-width: 760px) {
    max-width: 60px;
    right: 10vw;
  }
`;

export const SearchInput = styled.form`
  position: relative;

  & input {
    box-sizing: border-box;
    padding: 5px 5px 5px 40px;
    width: 360px;
    height: 46px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    outline: none;
  }

  & input::placeholder {
    font-size: 16px;
    font-weight: light;
    font-family: FontAwesome;
    color: rgba(118, 118, 118, 0.8);
  }

  & img {
    position: absolute;
    top: 13px;
    left: 14px;
  }
`;
