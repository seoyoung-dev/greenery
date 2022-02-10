import styled from "styled-components";

export const IconBox = styled.div`
  width: 54px;
  height: 276px;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  img {
    color: #767676;
    width: 22px;
  }

  & + & {
    margin-top: 20px;
  }
`;
