import styled from "styled-components";

export const LogoWrap = styled.div`
  text-align: center;
`;
export const HeaderLogo = styled.img`
  vertical-align: bottom;
  content: url("/img/favicon.svg");

  @media (min-width: 768px) {
    content: url("/img/logo.svg");
  }
`;

export const FormLogo = styled.img`
  vertical-align: bottom;
`;
