import styled from "styled-components";

export const LogoWrap = styled.div`
  text-align: center;
`;
export const LogoImage = styled.div`
  content: url("img/favicon.svg");

  @media (min-width: 768px) {
    content: url("img/logo.svg");
  }
`;
