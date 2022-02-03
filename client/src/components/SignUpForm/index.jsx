import * as S from "./style";
import { useState } from "react";

function SignUpForm() {
  const [profileImage, setProfileImage] = useState("");

  const inputList = [
    {
      title: "아이디(닉네임)",
      type: "text",
      placeholder: "ID",
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "******",
    },
    {
      title: "비밀번호 확인",
      type: "password",
      placeholder: "******",
    },
    {
      title: "이메일 주소",
      type: "email",
      placeholder: "example@greenfriend.com",
    },
  ];

  const FileInputList = [
    {
      title: "프로필이미지(선택)",
      type: "file",
    },
  ];

  function handleUploadFile(target) {
    const reader = new FileReader();
    const file = target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  }

  function CreateInput(list) {
    const InputList = list.map(({ title, type, placeholder }) => {
      return (
        <S.InputWrap key={title + type}>
          <S.Label>{title}</S.Label>
          <S.FullWidthInput
            type={type}
            placeholder={placeholder}
            autoComplete="on"
          ></S.FullWidthInput>
        </S.InputWrap>
      );
    });

    return InputList;
  }

  function CreateFileInput(list) {
    const FileInput = list.map(({ title, type }) => {
      return (
        <S.InputWrap key={title + type}>
          <S.Label key={title + type}>{title}</S.Label>
          <input
            type={type}
            onChange={event => {
              handleUploadFile(event.target);
              console.log(event.target.files);
            }}
          ></input>
        </S.InputWrap>
      );
    });

    return FileInput;
  }

  return (
    <S.LayoutLoginForm>
      {CreateInput(inputList)}
      {CreateFileInput(FileInputList)}
      <S.ImagePreview>
        <img id="profile-preview" src={profileImage} alt="Profile"></img>
      </S.ImagePreview>
      <S.FormFooter>
        <S.FullWidthButton>가입하기</S.FullWidthButton>
      </S.FormFooter>
    </S.LayoutLoginForm>
  );
}

export default SignUpForm;
