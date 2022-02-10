import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { HomeLogo } from "components/HomeLogo";
import { TextInput } from "components/TextInput";
import { SubmitButton } from "components/SubmitButton";

function Container() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onRefreshToken();
  }, []);

  const onLoginRequest = async data => {
    const url = "/users/login";
    try {
      const response = await axios.post(url, data);

      if (!response.data.isOk) {
        throw new Error(`${response.data.message}`);
      }
      return response;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  const onLoginSuccess = response => {
    const { accessToken } = response.data;

    axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;
  };
  const onRefreshToken = () => {
    axios.post("/users/refresh").then(response => onLoginSuccess(response));
  };

  return (
    <Main>
      <Section>
        <HomeLogo />
        <form
          onSubmit={event => {
            event.preventDefault();

            onLoginRequest({ email, password })
              .then(response => {
                onLoginSuccess(response);
                navigate("/");
              })
              .catch(err => alert(err));
          }}
        >
          <TextInput
            title={"아이디"}
            type={"text"}
            placeholder={"ID"}
            autoComplete={"on"}
            setState={setEmail}
          ></TextInput>
          <TextInput
            title={"비밀번호"}
            type={"password"}
            placeholder={"******"}
            autoComplete={"on"}
            setState={setPassword}
          ></TextInput>
          <SignOptionWrap>
            <Label>
              <input type="checkbox" />
              로그인유지
            </Label>
            <Link to="#">아이디/비밀번호 찾기</Link>
          </SignOptionWrap>

          <SubmitButton type={"submit"} text={"로그인"}></SubmitButton>
          <SignUpLinkWrap>
            <Link to="/signup">처음 방문하셨나요?</Link>
          </SignUpLinkWrap>
        </form>
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

const SignUpLinkWrap = styled.div`
  margin: 7px 0 0 0;
  text-align: center;

  & a {
    color: blue;
    text-decoration: none;
  }
`;
const SignOptionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Label = styled.label`
  margin-bottom: 3px;
`;

export default Container;
