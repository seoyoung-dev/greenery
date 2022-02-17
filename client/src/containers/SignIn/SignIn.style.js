import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Section = styled.section`
  width: 320px;
  border-radius: 5px;
  margin: 0 auto;

  & a {
    font-size: 14px;
    font-weight: 500;
    color: #767676;
  }

  & label {
    font-size: 14px;
  }
`;

export const SignUpLinkWrap = styled.div`
  margin: 7px 0 0 0;
  text-align: center;
`;
export const SignOptionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  margin-bottom: 3px;
`;

export const FormHeader = styled.div`
  padding-bottom: 30px;
`;
