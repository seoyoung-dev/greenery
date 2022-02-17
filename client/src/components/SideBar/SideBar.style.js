import styled from "styled-components";

export const SideBarWrapper = styled.section`
  position: fixed;
  top: 330px;
  width: 54px;
  height: 276px;

  @media screen and (max-width: 1024px) {
    width: 276px;
    height: 54px;
    position: static;
    display: flex;
    flex-direction: row;
    margin: 30px 0 20px 0;
  }
`;

export const IconBox = styled.div`
  position: absolute;
  left: 800px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  button {
    background-color: transparent;
    border-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    position: static;
    display: flex;
    flex-direction: row;
  }
`;

export const Icon = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);

  img {
    width: ${props => props.width}px;
  }

  & + & {
    margin-top: 20px;
  }

  &:hover {
    background: var(--gray);
  }

  @media screen and (max-width: 1024px) {
    & + & {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`;
