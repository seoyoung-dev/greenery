import styled from "styled-components";

export const BlurBackground = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 200;
  padding: 30px 0;
`;

export const Modal = styled.div`
  background: #fefefe;
  width: clamp(600px, 100%, 600px);
  margin: 0 auto;
  z-index: 300;

  span {
    float: right;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

export const DetailContainer = styled.article`
  width: 100%;
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.figure`
  width: 150px;
  img {
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Header = styled.header`
  text-align: center;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1rem;
    margin-top: 5px;
  }
`;
export const Main = styled.main`
  margin-top: 20px;
  color: var(--primary-dark);
  font-weight: bolder;
  line-height: 1.6;
`;
export const Footer = styled.footer`
  margin-top: 20px;
  width: 100%;
  color: var(--primary);
  font-weight: bold;

  p {
    margin: 5px;
  }
`;
