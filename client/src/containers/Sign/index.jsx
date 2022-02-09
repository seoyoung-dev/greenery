import { HeaderLogo } from "components/HeaderLogo/HeaderLogo";
import { SignForm } from "components/SignForm";
import styled from "styled-components";

function Container({ isSignIn }) {
  return (
    <Main>
      <Section>
        <HeaderLogo></HeaderLogo>
        <SignForm isSignIn={isSignIn}></SignForm>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Section = styled.section`
  width: 400px;
  border-radius: 5px;
  margin: 0 auto;
`;

export default Container;
