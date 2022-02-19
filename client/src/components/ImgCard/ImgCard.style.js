import styled from "styled-components";

export const Container = styled.div`
  width: 1136px;

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    width: 100%;
    padding: 5%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: 134px;
  height: 46px;
  cursor: pointer;
  color: var(--primary);
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: #ffffff;
  }
`;

const Content = styled.div`
  font-family: Roboto;
  box-sizing: border-box;
  width: 550px;
  height: 704px;
  padding: 60px 50px;
  border-radius: 10px;

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    height: 500px;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    height: 400px;
  }
`;

export const Detail = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin: 0;

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    font-size: 35px;
  }

  @media screen and (max-width: 767px) {
    font-size: 5vw;
  }
`;

export const NavCard = styled(Content)`
  background: url(${props => props.imgUrl}) center no-repeat;
  background-size: cover;
  width: 49%;

  @media (max-width: 767px) {
    width: 90%;
    height: 600px;

    & + & {
      margin-top: 15px;
    }
  }
`;
