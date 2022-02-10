import styled from "styled-components";

export const PostArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PostTitle = styled.input`
  width: 862px;
  height: 44px;

  margin: 36px;

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
