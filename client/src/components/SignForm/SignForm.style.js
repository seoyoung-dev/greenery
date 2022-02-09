import styled from "styled-components";

export const LayoutSignForm = styled.form`
  padding: 30px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignInputWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;

  flex-direction: column;
`;

export const SignButtonWrap = styled.div`
  width: 100%;
`;

export const SignOptionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SignUpLinkWrap = styled.div`
  margin: 7px 0 0 0;
  text-align: center;

  & a {
    color: blue;
    text-decoration: none;
  }
`;

export const FileInputWrap = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  text-align: center;

  & img {
    width: 100px;
    height: 100px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;

  border: 1px solid #8888;
`;

export const SignButton = styled.button`
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
export const Label = styled.label`
  margin-bottom: 3px;
`;
export const FileInput = styled.input``;
