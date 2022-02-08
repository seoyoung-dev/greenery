import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./SignInForm.style";
import axios from "axios";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignIn() {
    try {
      const url = "/users/login";
      const reqConfig = {};
      const data = { email, password };
      const response = axios.post(url, data, reqConfig);

      // const access_token = "qwerasdf";
      // const response = {
      //   isOk: true,
      //   access_token,
      //   message: "로그인 성공",
      // };
      return response;
    } catch (err) {
      return console.error("Error:", err);
    }
  }

  const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  return (
    <S.LayoutLoginForm onSubmit={event => event.preventDefault()}>
      <S.InputWrap>
        <S.FullWidthInput
          placeholder="아이디를 입력하세요"
          autoComplete="on"
          value={email}
          onChange={event => setEmail(event.target.value)}
        ></S.FullWidthInput>
      </S.InputWrap>
      <S.InputWrap>
        <S.FullWidthInput
          type="password"
          placeholder="패스워드를 입력하세요"
          autoComplete="on"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </S.InputWrap>
      <S.LayoutSignupOption>
        <S.Label>
          <S.CheckboxInput type="checkbox" />
          로그인유지
        </S.Label>
        <Link to="#">아이디/비밀번호 찾기</Link>
      </S.LayoutSignupOption>
      <S.FormFooter>
        <S.ButtonWrap>
          <S.FullWidthButton
            onClick={() => {
              handleSignIn().then(response => {
                // saveLocalStorage("access_token", response.access_token);
                // navigate("/");
              });
            }}
          >
            로그인
          </S.FullWidthButton>
        </S.ButtonWrap>
        <S.LayoutSignUpLink>
          <Link to="/signup">처음 방문하셨나요?</Link>
        </S.LayoutSignUpLink>
      </S.FormFooter>
    </S.LayoutLoginForm>
  );
}
