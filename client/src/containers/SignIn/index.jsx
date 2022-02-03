import HeaderLogo from "components/HeaderLogo";
import SignInForm from "components/SignInForm";

import styled from "styled-components";

function Container() {
  return (
    <Main>
      <Section>
        <HeaderLogo></HeaderLogo>
        <SignInForm></SignInForm>
      </Section>
    </Main>
  );
}

const Section = styled.section`
  border-radius: 5px;
  margin: 0 auto;

  & a {
    text-decoration: none;
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Container;
