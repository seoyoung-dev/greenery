import styled from "styled-components";

export const PostTextarea = styled.textarea`
  width: 420px;
  height: 153px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  margin-left: 22px;

  resize: none;

  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  &:focus {
    outline: none;
    border: 1px solid #45ba66;
  }
`;

export const UploadImg = styled.img`
  width: 420;
  height: 350;
  border: 1px solid #dadce0;
  border-radius: 10px;
`;

export const ImgForm = styled.div`
  margin-bottom: 35px;
`;
