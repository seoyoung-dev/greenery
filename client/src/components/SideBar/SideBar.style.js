import styled from "styled-components";

export const IconBox = styled.div`
  position: absolute;
  left: 75vw;
  top: 150px;
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
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);

  img {
    color: var(--light-text);
    width: ${props => props.width}px;
  }

  & + & {
    margin-top: 20px;
  }
`;
