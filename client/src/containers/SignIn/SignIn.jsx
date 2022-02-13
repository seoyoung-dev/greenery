import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Main,
  Section,
  SignUpLinkWrap,
  SignOptionWrap,
  Label,
  FormHeader,
} from "./SignIn.style";

import HomeLogo from "components/HomeLogo";
import TextInput from "components/TextInput";
import SubmitButton from "components/SubmitButton";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // setTimeout을 이용하여 엑세스 토큰의 유효기간이 일정시간 이하가 될 경우 엑세스 토큰을 다시받기 (x)

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
    const { access_token } = response.data;

    axios.defaults.headers.common["Authorization"] = access_token;
    console.log(axios.defaults.headers.common);
  };
  const onRefreshToken = () => {
    axios.post("/users/refresh").then(response => onLoginSuccess(response));
  };

  const textInputList = [
    {
      // type: "email",
      placeholder: "example@greenfriend.com",
      autoComplete: "on",
      setState: setEmail,
    },
    {
      // title: "비밀번호",
      type: "password",
      placeholder: "*******",
      autoComplete: "on",
      setState: setPassword,
    },
  ];

  return (
    <Main>
      <Section>
        <FormHeader>
          <HomeLogo />
        </FormHeader>
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
          {textInputList.map(
            ({ title, type, placeholder, autoComplete, setState }, index) => {
              return (
                <TextInput
                  key={type + index}
                  title={title}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  setState={setState}
                />
              );
            },
          )}
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
