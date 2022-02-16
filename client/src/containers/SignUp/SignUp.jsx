import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Main,
  Section,
  ImagePreviewWrap,
  UploadImage,
  Label,
  FormHeader,
} from "./SignUp.style";

import HomeLogo from "components/HomeLogo";
import TextInput from "components/TextInput";
import SubmitButton from "components/SubmitButton";

export function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("img/upload.svg");

  // 추가해야할 부분
  // 입력값이 올바르지 않은 경우에는 회원가입요청을 보내지 않아야한다.
  // password 와 checkPassword가 같아야한다.
  const fileInput = useRef("");
  const navigate = useNavigate();

  const textInputList = [
    {
      title: "이메일(아이디)",
      type: "email",
      placeholder: "example@greenfriend.com",
      autoComplete: "on",
      minLength: 12,
      maxLength: 32,
      onBlur: setEmail,
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "*******",
      minLength: 8,
      maxLength: 12,
      autoComplete: "on",
      onBlur: setPassword,
    },
    {
      title: "비밀번호 확인",
      type: "password",
      placeholder: "*******",
      minLength: 8,
      maxLength: 12,
      autoComplete: "on",
      onBlur: setCheckPassword,
    },
    {
      title: "닉네임",
      type: "text",
      placeholder: "ex) 초록집사",
      autoComplete: "on",
      minLength: 4,
      maxLength: 12,
      onBlur: setName,
    },
  ];
  // 이미지 업로드시 미리보기
  function renderPreviewImage(target) {
    const reader = new FileReader();
    const file = target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  }

  // input value를 FormData에 담기
  function handleFormData() {
    const data = new FormData();
    const file = fileInput.current.files[0];

    data.append("name", name);
    data.append("password", password);
    data.append("email", email);
    data.append("profileImage", file);

    return data;
  }

  function validateFormInput(list) {
    const [email, name, password, checkPassword] = list;

    function checkLength(list) {
      const result = list.every(ele => ele.length > 0);

      return result;
    }

    const compareTwoString = (originString, checkString) => {
      return originString === checkString;
    };

    const checkNotSpecialString = string => {
      // a-zA-Z0-9-가-힣 가 아닌 문자열이 있으면 true를 반환한다.
      const regExp = /[^a-zA-Z0-9-가-힣]+/g;
      if (regExp.test(string)) {
        return false;
      }
      return true;
    };

    if (!checkLength(list)) {
      console.log(checkLength(list));
      alert("비어있는 값을 채워주세요");
      return false;
    }
    if (!compareTwoString(password, checkPassword)) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    }
    if (!checkNotSpecialString(name)) {
      alert("한글, 알파벳 대소문자, 숫자만 입력하세요");
      return false;
    }

    return true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!validateFormInput([email, password, checkPassword, name])) {
      return;
    }

    const url = "api/users/register";
    const data = handleFormData();

    // 서버에서 상태코드를 추가해주어야 할 것 같다. catch(err)
    axios
      .post(url, data)
      .then(response => {
        alert(response.data.message);
        navigate("/login");
      })
      .catch(err => console.error(err));
  }
  return (
    <Main>
      <Section>
        <FormHeader>
          <HomeLogo />
        </FormHeader>
        <form onSubmit={event => submitHandler(event)}>
          {textInputList.map(
            (
              {
                title,
                type,
                placeholder,
                autoComplete,
                minLength,
                maxLength,
                onBlur,
              },
              index,
            ) => {
              return (
                <TextInput
                  key={index}
                  title={title}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  minLength={minLength}
                  maxLength={maxLength}
                  onBlur={onBlur}
                />
              );
            },
          )}
          <Label>프로필이미지(선택)</Label>
          <ImagePreviewWrap>
            <Label>
              <UploadImage src={profileImage} alt="uploadImage"></UploadImage>
              <input
                ref={fileInput}
                type="file"
                style={{ display: "none" }}
                onChange={event => renderPreviewImage(event.target)}
              />
            </Label>
          </ImagePreviewWrap>
          <SubmitButton type="submit" text="회원가입"></SubmitButton>
        </form>
      </Section>
    </Main>
  );
}
