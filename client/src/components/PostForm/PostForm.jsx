import axios from "axios";
import React, { useState, useRef } from "react";
import {
  PostTextarea,
  UploadImg,
  CotentAddButton,
  PostTitle,
  RemoveBtn,
  ContentSection,
  PostFormWrapper,
} from "./PostForm.style";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const inputRef = useRef([]);
  const [inputList, setInputList] = useState([
    {
      text: "",
      imgUrl: "",
      // fileImage: "/images/userProfile/default.png",
    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    if (name === "fileImage") {
      list[index][name] = URL.createObjectURL(e.target.files[0]);
      list[index].imgUrl = "";
    } else list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { text: "", imgUrl: "" }]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    // console.log(inputRef);

    data.append("title", title);
    inputList.forEach((content, i) => {
      data.append("userfiles", inputRef.current[i].files[0]);
      data.append(`contents[${i}]`, content.text);
      data.append(`img[${i}]`, content.imgUrl);
    });

    axios
      .post("/posts", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(res => console.log(res.data));

    console.log(data.getAll("title"));
    console.log(data.getAll("userfiles"));
    console.log(data.getAll("contents"));
    console.log(data.getAll("img"));
  };

  return (
    <PostFormWrapper>
      <PostTitle
        placeholder="제목을 입력해주세요."
        onChange={e => setTitle(e.target.value)}
      />
      <form onSubmit={onSubmit}>
        {inputList.map((x, i) => {
          return (
            <ContentSection key={i}>
              {/* {console.log(x)} */}
              <label htmlFor={x.uploadFile}>
                <input
                  ref={e => {
                    inputRef.current[i] = e;
                  }}
                  type="file"
                  id={x.uploadFile}
                  name="fileImage"
                  accept="image/*"
                  onChange={e => handleInputChange(e, i)}
                  style={{ display: "none" }}
                />
                {x.fileImage ? (
                  <UploadImg
                    style={{ width: 420, height: 350, objectFit: "cover" }}
                    src={x.fileImage}
                    alt="upload.png"
                  />
                ) : (
                  <UploadImg src="/img/upload.png" alt="upload.png" />
                )}
              </label>
              {inputList.length !== 1 && (
                <RemoveBtn onClick={() => handleRemoveClick(i)}>
                  <img src="/icon/postTrash.svg" />
                </RemoveBtn>
              )}

              <PostTextarea
                name="text"
                placeholder="내용을 입력하세요."
                value={x.text}
                onChange={e => handleInputChange(e, i)}
              />
            </ContentSection>
          );
        })}
        {/* <button type="submit">보내기</button> */}
      </form>

      <CotentAddButton onClick={handleAddClick}>추가하기</CotentAddButton>

      {/* <div>{JSON.stringify(inputList)}</div> */}
    </PostFormWrapper>
  );
}
