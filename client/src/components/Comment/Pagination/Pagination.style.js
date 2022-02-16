import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 25px;
    height: 25px;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Pages = styled.div`
  margin: 0 20px;

  & button {
    background-color: white;
    border: none;
  }

  .active,
  & button:hover {
    background-color: #45ba66;
    color: white;
  }
`;
