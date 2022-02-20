import styled from "styled-components";

export const SearchContainer = styled.div`
  width: clamp(250px, 100%, 400px);
  position: relative;

  img {
    display: inline;
    position: absolute;
    top: 14px;
    left: 20px;
    pointer-events: none;
  }
`;

export const Search = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  width: 100%;
  padding: 14px 7px 14px 50px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  &:hover {
    background: #fcfcfc;
  }

  /* Chrome, Firefox, Opera, Safari */
  ::placeholder {
    color: #e5e5e5;
    /* Firefox */
    opacity: 1;
  }

  /* IE 10~ */
  :-ms-input-placeholder {
    color: #e5e5e5;
  }

  /* Edge */
  ::-ms-input-placeholder {
    color: #e5e5e5;
  }
`;
