import styled from "styled-components";

export const BlurBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20000;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const Modal = styled.div`
  background: #fefefe;
  width: clamp(0px, 100%, 600px);
  height: 100%;
  z-index: 30000;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 0 auto;
  overflow-y: auto;
`;

export const DetailContainer = styled.article`
  width: clamp(0px, 100%, 500px);
  height: 100%;
  padding: 20px;
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
  font-size: 0.9rem;
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

export const Footer = styled.footer`
  width: 100%;
  margin-top: 25px;
  color: var(--primary-light);
  font-weight: bold;

  p {
    margin: 5px;
    font-size: 0.85rem;
  }
  display: flex;
  flex-wrap: wrap;
`;

export const MetaLeft = styled.div``;
export const MetaRight = styled.div``;
