import * as S from "./SignUpForm.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUpForm(props) {
  const { postSignUpRequest } = props;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();

  const inputList = [
    {
      title: "아이디(닉네임)",
      type: "text",
      placeholder: "ID",
      set: setName,
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "******",
      set: setPassword,
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
      set: setEmail,
    },
  ];

  const FileInputList = [
    {
      title: "프로필이미지(선택)",
      type: "file",
    },
  ];

  function CreateInput(list) {
    const InputList = list.map(({ title, type, placeholder, set }) => {
      return (
        <S.InputWrap key={title + type}>
          <S.Label>{title}</S.Label>
          <S.FullWidthInput
            type={type}
            placeholder={placeholder}
            autoComplete="on"
            onChange={e => {
              set(e.target.value);
            }}
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
              setUploadFile(event.target);
              console.log(event.target.files);
            }}
          ></input>
        </S.InputWrap>
      );
    });

    return FileInput;
  }

  function setUploadFile(target) {
    const reader = new FileReader();
    const file = target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  }

  return (
    <S.LayoutLoginForm>
      {CreateInput(inputList)}
      {CreateFileInput(FileInputList)}
      <S.ImagePreview>
        <img id="profile-preview" src={profileImage} alt="Profile"></img>
      </S.ImagePreview>
      <S.FormFooter>
        <S.FullWidthButton
          onClick={event => {
            event.preventDefault();
            postSignUpRequest(name, password, email, profileImage).then(
              response => {
                // if (response.error.code === 11000) {
                //   alert(`회원가입 실패: ${response.message}`);
                //   navigate("/login");
                //   return;
                // }
                // alert("회원가입이 성공하였습니다.");
                // navigate("/login");
                console.log(response);
              },
            );
          }}
        >
          가입하기
        </S.FullWidthButton>
      </S.FormFooter>
    </S.LayoutLoginForm>
  );
}
