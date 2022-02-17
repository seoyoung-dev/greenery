import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userProfileState } from "Atoms";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { Main, Section, SignUpLinkWrap, FormHeader } from "./SignIn.style";

import axios from "axios";
import { Header, HomeLogo, TextInput, SubmitButton } from "components";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // recoil global state Update Function
  const setUserProfile = useSetRecoilState(userProfileState);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const textInputList = [
    {
      placeholder: "이메일",
      autoComplete: "on",
      minLength: 12,
      maxLength: 32,
      onBlur: setEmail,
    },
    {
      type: "password",
      placeholder: "비밀번호",
      autoComplete: "on",
      minLength: 8,
      maxLength: 12,
      onBlur: setPassword,
    },
  ];

  const onLoginRequest = async data => {
    const url = "api/users/login";
    const response = await axios.post(url, data);

    if (!response.data.isOk) {
      throw new Error(`${response.data.message}`);
    }
    return response;
  };

  // 로그인 성공시 access token을 axios의 headers의 deafult로 설정
  const setAxiosDefaultAccessToken = response => {
    const { access_token } = response.data;

    axios.defaults.headers.common["Authorization"] = access_token;
  };

  // set global userProfileState
  const handleUserProfile = async () => {
    const response = await axios.get("api/users/auth");
    const { email, id, name } = response.data;

    setUserProfile(prev => {
      const newUserProfile = { ...prev, email, id, name };
      return newUserProfile;
    });
  };

  // refresh_token을 이용하여 access_token 재발급
  const refreshAccessToken = () => {
    axios
      .post("api/users/refresh")
      .then(response => setAxiosDefaultAccessToken(response));
  };

  function validateFormInput(list) {
    const email = list[0];
    const password = list[1];
    const checkPassword = list[2];
    const name = list[3];
    // const [email, name, password, checkPassword] = list;
    const checkLength = list => {
      const result = list.every(ele => ele.length > 0);

      return result;
    };

    const compareTwoString = (originString, checkString) => {
      return originString === checkString;
    };

    const checkNotSpecialString = string => {
      // a-zA-Z0-9-가-힣 가 아닌 문자열이 있으면 true를 반환한다.
      const regExp = /[^a-zA-Z0-9-가-힣]+/g;
      if (regExp.test(string)) {
        return;
      }
      return true;
    };

    if (!checkLength(list)) {
      alert("비어있는 값을 채워주세요");
      return false;
    }
    if (checkPassword && !compareTwoString(password, checkPassword)) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    }
    if (name && !checkNotSpecialString(name)) {
      alert("한글, 알파벳 대소문자, 숫자만 입력하세요");
      return false;
    }

    return true;
  }

  const submitHandler = event => {
    event.preventDefault();
    if (!validateFormInput([email, password])) {
      return;
    }

    onLoginRequest({ email, password })
      .then(response => {
        const JWT_EXPIRY_TIME = 3600 * 1000;
        const access_token = response.data.access_token;

        setAxiosDefaultAccessToken(response);
        setCookie("access_token", access_token, {
          path: "/",
          maxAge: 3600,
          secure: true,
        });
        setTimeout(refreshAccessToken, JWT_EXPIRY_TIME - 100 * 6000);
      })
      .then(() => {
        const complete = handleUserProfile();
        if (complete) {
          navigate("/");
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <Header />
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
              ({ title, type, placeholder, autoComplete, onBlur }, index) => {
                return (
                  <TextInput
                    key={index}
                    title={title}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    onBlur={onBlur}
                  />
                );
              },
            )}
            {/* <SignOptionWrap>
            <Label>
              <input type="checkbox" />
              로그인유지
            </Label>
            <Link to="#">아이디/비밀번호 찾기</Link>
          </SignOptionWrap> */}
            <SubmitButton type={"submit"} text={"로그인"}></SubmitButton>
            <SignUpLinkWrap>
              <Link to="/signup">처음 방문하셨나요?</Link>
            </SignUpLinkWrap>
          </form>
        </Section>
      </Main>
    </>
  );
}
