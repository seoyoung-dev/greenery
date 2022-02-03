import styled from "styled-components";

const LayoutLoginForm = styled.form`
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;

  flex-direction: column;
`;

const ImagePreview = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const FullWidthInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;

  border: 1px solid #8888;
`;

const FullWidthButton = styled.button`
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

const FormFooter = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 3px;
`;

export {
  InputWrap,
  ImagePreview,
  FullWidthInput,
  LayoutLoginForm,
  FormFooter,
  FullWidthButton,
  Label,
};
