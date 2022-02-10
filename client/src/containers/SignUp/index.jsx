import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { HomeLogo } from "components/HomeLogo";
import { TextInput } from "components/TextInput";
import { SubmitButton } from "components/SubmitButton";

import userProfileImage from "./userProfile.png";
function Container() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(userProfileImage);

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

  return (
    <Main>
      <Section>
        <HomeLogo />
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
          <TextInput
            title={"아이디"}
            type={"text"}
            placeholder={"ID"}
            autoComplete={"on"}
            setState={setName}
          ></TextInput>
          <TextInput
            title={"비밀번호"}
            type={"password"}
            placeholder={"******"}
            autoComplete={"on"}
            setState={setPassword}
          ></TextInput>
          <TextInput
            title={"비밀번호 확인"}
            type={"password"}
            placeholder={"******"}
            autoComplete={"on"}
            setState={setCheckPassword}
          ></TextInput>
          <TextInput
            title={"이메일"}
            type={"password"}
            placeholder={"example@greenfriend.com"}
            autoComplete={"on"}
            setState={setEmail}
          ></TextInput>
          <p>프로필 이미지(선택)</p>
          <ImagePreviewWrap>
            <Label>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={event => renderPreviewImage(event.target)}
              />
              <img id="profile-preview" src={profileImage} alt="Profile"></img>
            </Label>
          </ImagePreviewWrap>
          <SubmitButton type={"submit"} text={"회원가입"}></SubmitButton>
        </form>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Section = styled.section`
  width: 350px;
  border-radius: 5px;
  margin: 0 auto;
`;

export const ImagePreviewWrap = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  text-align: center;

  & img {
    width: 100px;
    height: 100px;
  }
`;

const Label = styled.label`
  margin-bottom: 3px;
`;

export default Container;
