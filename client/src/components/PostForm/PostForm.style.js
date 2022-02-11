import styled from "styled-components";

export const PostFormWrapper = styled.div``;

export const PostTitle = styled.input`
  width: 862px;
  height: 44px;
  margin: 32px 0px 32px 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;

  line-height: 20px;
  text-indent: 10px;

  border-radius: 5px;
  border: 1px solid #e5e5e5;

  &:focus {
    outline: none;
    border: 1px solid #45ba66;
  }
`;

export const ContentSection = styled.div`
  position: relative;

  margin-bottom: 32px;
`;

export const UploadImg = styled.img`
  border: 1px solid #dadce0;
  border-radius: 10px;
`;

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

export const RemoveBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent;
  border: none;

  img {
    width: 30px;
    height: 26px;
  }
  left: 820px;
  bottom: 300px;
`;

export const CotentAddButton = styled.button`
  width: 862px;
  height: 64px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  line-height: 21px;
  align-items: center;
  text-align: center;

  border-radius: 5px;
  border: 1px solid #e5e5e5;

  background: #f5f5f5;

  color: #767676;
`;
