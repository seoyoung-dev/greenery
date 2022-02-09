import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutSignForm,
  SignInputWrap,
  FileInputWrap,
  SignButtonWrap,
  SignOptionWrap,
  SignUpLinkWrap,
  TextInput,
  FileInput,
  SignButton,
  Label,
} from "./SignForm.style";

export function SignForm({ isSignIn }) {
  // const [isSignIn, setSignIn] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");

  console.log(profileImage);
  const textInputList = [
    {
      title: "아이디(닉네임)",
      type: "text",
      placeholder: "ID",
      setFunc: setName,
      option: true,
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "********",
      setFunc: setPassword,
      option: true,
    },
    {
      title: "비밀번호 확인",
      type: "password",
      placeholder: "********",
      setFunc: setCheckPassword,
      option: false,
    },
    {
      title: "이메일",
      type: "email",
      placeholder: "example@greenfriend.com",
      setFunc: setEmail,
      option: false,
    },
  ];

  const fileInputList = [
    {
      title: "프로필이미지(선택)",
      type: "file",
      setFunc: setUploadFile,
    },
  ];

  function setUploadFile(target) {
    const reader = new FileReader();
    const file = target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  }

  function createTextInput(list, option) {
    if (option) {
      list = list.filter(({ option }) => option);
    }

    const inputTags = list.map(({ title, type, placeholder, setFunc }) => {
      return (
        <SignInputWrap key={title + type}>
          <Label>{title}</Label>
          <TextInput
            type={type}
            placeholder={placeholder}
            autoComplete="on"
            onChange={e => setFunc(e.target.value)}
          ></TextInput>
        </SignInputWrap>
      );
    });

    return inputTags;
  }

  function craeteFileInput(list) {
    const inputTags = list.map(({ title, type, setFunc }) => {
      return (
        <SignInputWrap key={title + type}>
          <Label>{title}</Label>
          <FileInput
            type={type}
            onChange={e => {
              setFunc(e.target);
            }}
          ></FileInput>
        </SignInputWrap>
      );
    });

    return inputTags;
  }

  return (
    <LayoutSignForm onsubmit={e => e.preventDefault()}>
      {createTextInput(textInputList, isSignIn)}
      {!isSignIn && craeteFileInput(fileInputList)}
      {isSignIn ? (
        <SignOptionWrap>
          <Label>
            <input type="checkbox" />
            로그인유지
          </Label>
          <Link to="#">아이디/비밀번호 찾기</Link>
        </SignOptionWrap>
      ) : (
        <FileInputWrap>
          <img id="profile-preview" src={profileImage} alt="profileImg" />
        </FileInputWrap>
      )}
      <SignButtonWrap>
        <SignButton
          onClick={event => {
            event.preventDefault();
            if (isSignIn) {
            }
          }}
        >
          {isSignIn ? "로그인" : "회원가입"}
        </SignButton>
      </SignButtonWrap>
      {isSignIn && (
        <SignUpLinkWrap>
          <Link to="/signup">처음 방문하셨나요?</Link>
        </SignUpLinkWrap>
      )}
    </LayoutSignForm>
  );
}
