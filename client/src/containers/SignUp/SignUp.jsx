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
      setState: setEmail,
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "*******",
      autoComplete: "on",
      setState: setPassword,
    },
    {
      title: "비밀번호 확인",
      type: "password",
      placeholder: "*******",
      autoComplete: "on",
      setState: setCheckPassword,
    },
    {
      title: "닉네임",
      type: "text",
      placeholder: "ex) 초록집사",
      autoComplete: "on",
      setState: setName,
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

  function submitHandler(event) {
    event.preventDefault();

    const url = "/users/register";
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
            ({ title, type, placeholder, autoComplete, setState }, index) => {
              return (
                <TextInput
                  key={index}
                  title={title}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  setState={setState}
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
          <SubmitButton type={"submit"} text={"회원가입"}></SubmitButton>
        </form>
      </Section>
    </Main>
  );
}
