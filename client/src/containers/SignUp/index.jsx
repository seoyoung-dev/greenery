import styled from "styled-components";

import { HeaderLogo } from "components/HeaderLogo/HeaderLogo";
import { SignUpForm } from "components/SignUpForm";

import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const handleSign = async (name, password, email, profileImg, navigate) => {
  const url = "/users/register";
  const data = { name, password, email, profileImg };
  const config = {};
  try {
    const response = await axios.post(url, data, config);

    if (!response.data.isOk) {
      throw new Error(`${response.data.error.keyPattern}이 중복입니다.`);
    }

    successHandler("회원가입이 완료되었습니다.", "/", navigate);
    return response;
  } catch (err) {
    // 어떤 입력값이 중복인지 화면에 렌더링하고 focus해주는 함수
    console.error(err);
    return err;
  }
};

function successHandler(message, url, navigate) {
  alert(message);
  navigate(url);
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
