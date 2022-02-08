import styled from "styled-components";

import { HeaderLogo } from "components/HeaderLogo/HeaderLogo";
import { SignUpForm } from "components/SignUpForm";

import axios from "axios";

function Container() {
  return (
    <Main>
      <Section>
        <HeaderLogo></HeaderLogo>
        <SignUpForm postSignUpRequest={handleSign}></SignUpForm>
      </Section>
    </Main>
  );
}

const handleSign = async (name, password, email, profileImg) => {
  const url = "/users/register";
  const data = { name, password, email, profileImg };
  const config = {};
  try {
    const response = await axios.post(url, data, config);
    // const response = {
    //   isOk: true,
    //   isAuthorize: false,
    //   message: "회원가입 성공",
    // }

    return response;
  } catch (err) {
    console.error(err);
  }
};

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
