import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 1136px;
  margin: 40px auto 0 auto;
  padding: 90px 0 0 0;
`;

export const ContentsWrapper = styled.section`
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-gap: 80px 28px;
  margin-top: 40px;
  min-height: 90vh;
`;

export const PostButtonWrapper = styled.div`
  max-width: 80px;
  position: fixed;
  z-index: 50;
  right: 15vw;
  bottom: 5vh;

  & img {
    border-radius: 50%;
  }
`;

export const SearchInput = styled.form`
  position: relative;

  & input {
    box-sizing: border-box;
    padding: 5px 5px 5px 40px;
    width: 330px;
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
