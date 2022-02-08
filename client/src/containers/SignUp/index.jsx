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

const handleSign = async () => {
  // const url = ""
  // const data = {id, password, email, profileImg}
  // const config = {}
  // const response = await axios.post(url, data, config);
  try {
    // const response = {
    //   isOk: true,
    //   isAuthorize: false,
    //   message: "회원가입 성공",
    // };

    const response = {
      error: { code: 11000 },
    };

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
