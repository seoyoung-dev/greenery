import styled from "styled-components";

export const SideBarWrapper = styled.section`
  position: fixed;
  top: 330px;
  width: 54px;
  height: 276px;
`;

export const IconBox = styled.div`
  position: absolute;
  left: 800px;
  width: 100%;
  height: 100%;
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
