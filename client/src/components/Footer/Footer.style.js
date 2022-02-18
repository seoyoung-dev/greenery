import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 160px;
  background: #e5e5e5;
  margin-top: 100px;

  div {
    width: 1140px;
    color: rgba(118, 118, 118, 0.8);
  }

  @media screen and (min-width: 768px) and (max-width: 1140px) {
    width: 100%;
    padding: 5%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 3%;
  }
`;
