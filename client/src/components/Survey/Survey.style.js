import styled from "styled-components";

export const Button = styled.button`
  background: var(--primary);
  color: var(--hightlight-text);
  padding: 5px 10px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  margin-top: 10px;
`;

export const Header = styled.div`
  width: 100%;
  .green {
    color: var(--primary);
  }

  .small {
    font-weight: normal;
    font-size: 1rem;
  }

  h1 {
    margin-bottom: 5px;
  }

  h5 {
    margin-top: 0;
  }
`;

export const QuestionContainer = styled.ul`
  width: 100%;
  padding: 0;
`;

export const QuestionBar = styled.li`
  list-style-type: none;
  width: 100%;
  height: 40px;
  background: var(--bg);

  ${props =>
    props.active &&
    `
    background: var(--primary);
    a {
      color: var(--hightlight-text);
    }

  `}

  a {
    display: inline-block;
    width: 100%;
    line-height: 40px;
    text-decoration: none;
    color: var(--text);
  }

  & + li {
    margin-top: 10px;
  }
`;
