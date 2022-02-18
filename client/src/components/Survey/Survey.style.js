import styled from "styled-components";

export const QuestionContainer = styled.ul`
  width: 100%;
  padding: 0;
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
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 0.7rem;
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }

    h5 {
      font-size: 1rem;
    }
  }
`;

export const QuestionBar = styled.li`
  list-style-type: none;
  width: 100%;
  height: 50px;
  background: var(--bg);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-weight: bolder;

  span {
    font-size: 0.9rem;
  }

  ${props =>
    props.active &&
    `
    background: var(--primary);
    span {
      color: var(--highlight-text);
    }
  `}

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text);

    img {
      margin: 0 15px;
    }
  }

  & + li {
    margin-top: 20px;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
