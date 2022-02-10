import styled from "styled-components";

export const Modal = styled.section`
  position: absolute;
  background: var(--bg-linear);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Button = styled.button`
  background: var(--primary);
  color: var(--hightlight-text);
  padding: 5px 10px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  margin-top: 10px;
`;

export const CenterContainer = styled.div`
  width: clamp(600px, 100%, 1200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
`;

export const ImageContainer = styled.figure``;

export const GridContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const PlantCard = styled.div`
  background: #fefefe;
  width: 550px;
  display: flex;
  border-radius: 10px;

  img {
    width: 150px;
  }

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
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

export const Description = styled.div`
  .origin {
    color: var(--primary-light);
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
