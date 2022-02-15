import styled from "styled-components";

export const BlurBackground = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20000;
`;

export const Modal = styled.div`
  background: #fefefe;
  width: clamp(0px, 100%, 600px);
  margin: 50px auto 0;
  z-index: 30000;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const DetailContainer = styled.article`
  width: clamp(0px, 100%, 500px);
  padding: 20px 20px;
  display: flex;
  margin: 0 auto;
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

export const CloseButton = styled.span`
  position: absolute;
  right: 25px;
  top: 20px;
  cursor: pointer;

  img {
    width: 15px;
  }
`;
