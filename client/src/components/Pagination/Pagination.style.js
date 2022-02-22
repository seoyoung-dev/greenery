import styled, { css } from "styled-components";

export const PageButton = styled.button`
  min-width: 26px;
  height: 26px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  cursor: pointer;
  color: var(--text);

  + button {
    margin-left: 7px;
  }

  ${props =>
    props.active &&
    css`
      background-color: var(--primary);
      color: #fff;
    `}
`;

export const ArrowButton = styled.button`
  background-color: #fff;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  cursor: pointer;

  margin: ${props => (props.flip ? "0 0 0 16px !important" : "0 16px 0 0")};

  ${props =>
    props.disabled &&
    css`
      visibility: hidden;
    `}

  ${props =>
    props.flip &&
    css`
      transform: scaleX(-1);
    `};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
