import { useState } from "react";
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

import { HomeLogo } from "components/HomeLogo";
import { TextInput } from "components/TextInput";
import { SubmitButton } from "components/SubmitButton";

export function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("img/upload.svg");

  const navigate = useNavigate();
  function renderPreviewImage(target) {
    const reader = new FileReader();
    const file = target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  }

  const onSignUpRequest = async data => {
    const url = "/users/register";
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

  return (
    <Main>
      <Section>
        <FormHeader>
          <HomeLogo />
        </FormHeader>
        <form
          onSubmit={event => {
            event.preventDefault();
            onSignUpRequest({ name, password, email, profileImage })
              .then(() => {
                alert("회원가입이 완료되었습니다.");
                navigate("/signin");
              })
              .catch(err => alert(err));
          }}
        >
          {textInputList.map(
            ({ title, type, placeholder, autoComplete, setState }, index) => {
              return (
                <TextInput
                  key={title + index}
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
