import styled from "styled-components";

export const ButtonWrap = styled.div`
  width: 100%;
`;
export const Label = styled.label`
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;

  border: 1px solid #8888;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;

  background-color: #45ba66;
  color: white;

  font-weight: bold;
  font-size: 17px;

  &:hover {
    opacity: 0.8;
  }
`;
