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
`;

export const FormHeader = styled.div`
  padding-bottom: 30px;
`;

export const ImagePreviewWrap = styled.div`
  width: 100%;
  margin: 10px 0;
  /* text-align: center; */
`;

export const UploadImage = styled.img`
  width: 130px;
  height: 120px;

  border: 1px solid #dadce0;
  border-radius: 10px;
  object-fit: cover;
`;

export const Label = styled.label`
  margin-bottom: 3px;
  font-size: 14px;
`;
