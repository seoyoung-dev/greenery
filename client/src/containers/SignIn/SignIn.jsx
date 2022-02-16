import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userProfileState } from "Atoms";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import {
  Main,
  Section,
  SignUpLinkWrap,
  SignOptionWrap,
  Label,
  FormHeader,
} from "./SignIn.style";

import axios from "axios";

import HomeLogo from "components/HomeLogo";
import TextInput from "components/TextInput";
import SubmitButton from "components/SubmitButton";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // recoil global state Update Function
  const setUserProfile = useSetRecoilState(userProfileState);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const textInputList = [
    {
      placeholder: "example@greenfriend.com",
      autoComplete: "on",
      onChange: setEmail,
    },
    {
      type: "password",
      placeholder: "*******",
      autoComplete: "on",
      onChange: setPassword,
    },
  ];

  // setTimeout을 이용하여 엑세스 토큰의 유효기간이 일정시간 이하가 될 경우 엑세스 토큰을 다시받기 (x)

  const onLoginRequest = async data => {
    const url = "/api/users/login";
    try {
      const response = await axios.post(url, data);

      if (!response.data.isOk) {
        throw new Error(`${response.data.message}`);
      }
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  // 로그인 성공시 access token을 axios의 headers 의 deafult 처리해준다.
  const setAxiosDefaultAccessToken = response => {
    const { access_token } = response.data;

    axios.defaults.headers.common["Authorization"] = access_token;
  };

  // set global userProfileState
  const handleUserProfile = () => {
    axios
      .get("/api/users/auth")
      .then(response => {
        const { email, id, name } = response.data;
        setUserProfile(prev => {
          const newUserProfile = { ...prev, email, id, name };
          return newUserProfile;
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  // refresh_token을 이용하여 access_token 재발급
  const refreshAccessToken = () => {
    axios
      .post("/api/users/refresh")
      .then(response => setAxiosDefaultAccessToken(response));
  };

  const submitHandler = event => {
    event.preventDefault();

    onLoginRequest({ email, password })
      .then(response => {
        // accessToken의 유효시간
        const JWT_EXPIRY_TIME = 3600 * 1000;

        const access_token = response.data.access_token;
        setAxiosDefaultAccessToken(response);
        setCookie("access_token", access_token, {
          path: "/",
          maxAge: 3600,
          secure: true,
          // httpOnly: true,
        });
        // 10분 전에 로그인 연장
        setTimeout(refreshAccessToken, JWT_EXPIRY_TIME - 100 * 6000);
      })
      .then(() => {
        handleUserProfile();
      })
      .then(() => {
        navigate("/");
      })
      .catch(err => alert(err));
  };

  return (
    <Main>
      <Section>
        <FormHeader>
          <HomeLogo />
        </FormHeader>
        <form
          onSubmit={event => {
            submitHandler(event);
          }}
        >
          {textInputList.map(
            ({ title, type, placeholder, autoComplete, onChange }, index) => {
              return (
                <TextInput
                  key={index}
                  title={title}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  onChange={onChange}
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
