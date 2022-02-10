import React from "react";
import { PostTextarea, UploadImg, ImgForm } from "./PostForm.style";

export default function PostForm() {
  return (
    <ImgForm>
      <label id="file-button" for="upload-file">
        <UploadImg src="/img/upload.png" alt="upload.png" />
        <input type="file" id="upload-file" style={{ display: "none" }} />
      </label>
      <PostTextarea placeholder="사진에 대해 설명해주세요."></PostTextarea>
    </ImgForm>
  );
}
