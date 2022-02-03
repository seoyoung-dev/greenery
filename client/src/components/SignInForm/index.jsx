import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";

function SignInForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.LayoutLoginForm onSubmit={event => event.preventDefault()}>
      <S.InputWrap>
        <S.FullWidthInput
          placeholder="아이디를 입력하세요"
          autoComplete="on"
          value={id}
          onChange={event => setId(event.target.value)}
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
            onClick={async () => {
              async function sendPostLoginRequest() {
                try {
                  const url = "http://localhost:800/users";
                  const requestConfig = {
                    method: "POST",
                    url: url,
                    data: {
                      id,
                      password,
                    },
                  };

                  const response = axios(requestConfig);
                  return response;
                } catch (err) {
                  return console.error("Error:", err);
                }
              }

              sendPostLoginRequest().then(console.log);
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

export default SignInForm;
