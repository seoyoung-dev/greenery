import styled from "styled-components";

const LayoutLoginForm = styled.form`
  box-sizing: border-box;
  /* width: 500px; */
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 400px;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  width: 400px;
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

const LayoutSignupOption = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const LayoutSignUpLink = styled.div`
  margin: 7px 0 0 0;
  text-align: center;
`;

const FormFooter = styled.div`
  width: 400px;
`;

const CheckboxInput = styled.input``;
const Label = styled.label``;

export {
  LayoutLoginForm,
  InputWrap,
  FullWidthInput,
  FullWidthButton,
  CheckboxInput,
  LayoutSignupOption,
  LayoutSignUpLink,
  FormFooter,
  ButtonWrap,
  Label,
};
