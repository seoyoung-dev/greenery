import styled from "styled-components";

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-weight: bolder;
  }
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 8px;

  background: transparent;

  &::-webkit-progress-bar {
  }
  &::-webkit-progress-value {
    background: var(--primary);
  }
  &::-webkit-progress-bar {
    background: var(--bg);
  }
`;
