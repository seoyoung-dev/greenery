import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 30px 0;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;

  & + div {
    border-top: 1px solid #e5e5e5;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.span`
  min-width: 200px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  background: var(--primary);
  color: var(--highlight-text);
  font-weight: bolder;

  &:before {
    content: url(" icon/tag.svg ");
    position: relative;
    margin-right: 8px;
    top: 3px;
  }
`;

export const Items = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  li {
    list-style-type: none;
    margin-left: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      height: 1rem;
      width: 1rem;
      cursor: pointer;

      border: 2px solid var(--primary);
      &:checked {
        background: var(--primary);
      }

      &:after {
        content: "";
        position: relative;
        left: 25%;
        width: 60%;
        height: 90%;
        border: solid #fff;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        display: none;
      }
      &:checked:after {
        display: block;
      }
    }

    label {
      cursor: pointer;

      padding-left: 10px;
    }
  }
`;
