import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./SignInForm.style";
import axios from "axios";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onRefreshToken();
  }, []);

  async function onLoginRequest() {
    try {
      const url = "/users/login";
      const reqConfig = {};
      const data = { email, password };

      const response = await axios.post(url, data, reqConfig);

      return response;
    } catch (err) {
      return console.error("Error:", err);
    }
  }

  const onRefreshToken = () => {
    axios.post("/users/refresh").then(response => onLoginSuccess(response));
  };

  const onLoginSuccess = response => {
    const { accessToken } = response.data;

    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
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
              onLoginRequest()
                .then(response => {
                  if (!response.data.isOk) {
                    throw new Error(response.data.message);
                  }
                  // 로그인 성공처리
                  onLoginSuccess(response);
                  alert("로그인되었습니다.");
                  navigate("/");
                })
                .catch(err => {
                  console.error(err);
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
