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
    border-radius: 3px;
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
`;
export const Description = styled.article`
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
  margin-top: 15px;
  padding: 15px 0 20px;
  border-top: 1px solid #e6e6e6;
`;

export const MetaBox = styled.div`
  h5 {
    margin: 0;
  }

  p {
    color: var(--primary-light);
    font-weight: bold;
    margin: 5px;
    font-size: 0.85rem;
    line-height: 1.3;

    &:before {
      content: "· ";
    }

    & span {
      color: var(--primary-dark);
    }
  }

  & + div {
    margin-top: 20px;
  }
`;
