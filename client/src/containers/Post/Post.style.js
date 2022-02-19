import styled from "styled-components";

export const PostWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PostFormWrapper = styled.div`
  @media (max-width: 1140px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items; */
  }
`;

export const PostTitle = styled.input`
  width: 862px;
  height: 44px;
  margin: 122px 0px 32px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;

  line-height: 20px;
  text-indent: 10px;

  border-radius: 5px;
  border: 1px solid #e5e5e5;

  &:focus {
    outline: none;
    border: 1px solid #45ba66;
  }

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    width: 96%;
    margin-top: 14%;
    margin-bottom: 2%;
    margin-left: 2%;
  }
  @media screen and (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 2%;
    width: 94%;
    margin-left: 3%;
  }
`;

export const ContentSection = styled.div`
  position: relative;
  margin-bottom: 32px;
  & label {
    position: relative;
    display: inline-block;
  }
  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.6%;
    & label {
      width: 40%;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 2%;
  }
`;

export const DisplayImg = styled.img`
  width: 420px;
  height: 350px;
  object-fit: cover;

  border: 1px solid #dadce0;
  border-radius: 10px;

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    & label {
      width: 30%;
    }
  }
  @media screen and (max-width: 767px) {
    width: 94%;
    height: auto;
    margin-left: 3%;
    margin-bottom: 2%;
  }
`;

export const PostTextarea = styled.textarea`
  /* position: relative; */

  width: 420px;
  height: 350px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;

  line-height: 20px;
  margin-left: 22px;
  resize: none;
  padding: 15px;

  border-radius: 5px;
  border: 1px solid #e5e5e5;

  &:focus {
    outline: none;
    border: 1px solid #45ba66;
  }

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    width: 40%;
    margin-left: 2%;
  }
  @media screen and (max-width: 767px) {
    width: 94%;
    height: 200px;
    margin-left: 3%;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  left: 10px;
  bottom: 10px;
  background-color: transparent;
  border: none;

  img {
    width: 34px;
    :hover {
      filter: drop-shadow(1px 1px 1px #000);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1140px) {
  }
  @media screen and (max-width: 767px) {
  }
`;

export const CotentAddButton = styled.button`
  width: 862px;
  height: 64px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  line-height: 21px;
  align-items: center;
  text-align: center;

  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background: #f5f5f5;

  color: #767676;
  @media screen and (min-width: 768px) and (max-width: 1140px) {
    width: 96%;
    margin-left: 2%;
    margin-bottom: 2%;
    /* padding: 10%; */
  }
  @media screen and (max-width: 767px) {
    width: 94%;
    margin-left: 3%;
    margin-bottom: 2%;
  }
`;
