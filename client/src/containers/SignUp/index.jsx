import styled from "styled-components";

import HeaderLogo from "../../components/HeaderLogo";
import SignUpForm from "../../components/SignUpForm";

function Container() {
  return (
    <Main>
      <Section>
        <HeaderLogo></HeaderLogo>
        <SignUpForm></SignUpForm>
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
