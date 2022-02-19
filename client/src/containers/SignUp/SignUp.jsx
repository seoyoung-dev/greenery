import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Main,
  Section,
  ImagePreviewWrap,
  UploadImage,
  Label,
  FormHeader,
} from "./SignUp.style";
import { HomeLogo, TextInput, SubmitButton } from "components";
import { validateForm } from "containers/SignIn/validation";

import axios from "axios";

export function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("img/upload.svg");

  const fileInput = useRef("");
  const navigate = useNavigate();

  const textInputList = [
    {
      title: "이메일(아이디)",
      type: "email",
      placeholder: "이메일을 입력하세요",
      autoComplete: "on",
      minLength: 12,
      maxLength: 32,
      onBlur: setEmail,
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "비밀번호를 입력하세요",
      minLength: 8,
      maxLength: 12,
      autoComplete: "on",
      onBlur: setPassword,
    },
    {
      title: "비밀번호 확인",
      type: "password",
      placeholder: "동일한 비밀번호를 입력하세요",
      minLength: 8,
      maxLength: 12,
      autoComplete: "on",
      onBlur: setCheckPassword,
    },
    {
      title: "닉네임",
      type: "text",
      placeholder: "닉네임을 입력하세요",
      autoComplete: "on",
      minLength: 2,
      maxLength: 8,
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

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (!validateForm([email, password, checkPassword, name])) {
      return;
    }

    const url = "api/users/register";
    const data = handleFormData();

    axios
      .post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        alert(response.data.message);
        navigate("/login");
      })
      .catch(err => console.error(err));
  };

  return (
    <Main>
      <Section>
        <FormHeader>
          <HomeLogo id="form" />
        </FormHeader>
        <form
          onKeyPress={e => handleKeyPress(e)}
          onSubmit={e => handleSubmit(e)}
        >
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
          <Label htmlFor="image">프로필이미지(선택)</Label>
          <ImagePreviewWrap>
            <Label>
              <UploadImage src={profileImage} alt="uploadImage"></UploadImage>
              <input
                id="image"
                ref={fileInput}
                type="file"
                accept="image/*"
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
