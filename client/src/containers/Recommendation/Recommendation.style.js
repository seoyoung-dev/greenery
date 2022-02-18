import styled from "styled-components";
import { Link } from "react-router-dom";

export const Modal = styled.section`
  position: fixed;
  background: var(--bg-linear);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  .green {
    color: var(--primary);
  }

  .small {
    font-weight: normal;
    font-size: 1rem;
  }

  h1 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  ${props =>
    props.result &&
    `
    text-align: center;
  `}

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const CloseButton = styled(Link)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const Nav = styled.nav`
  text-align: right;
  width: 100%;
  margin: 50px 20px 20px 0;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    color: var(--lighter-text);
  }
`;

export const ButtonCotainer = styled.div`
  margin: 30px auto 0;
`;
