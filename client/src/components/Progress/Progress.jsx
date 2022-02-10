import { ProgressContainer, ProgressBar } from "./Progress.style";

export default function Progress({ value }) {
  return (
    <ProgressContainer>
      <label htmlFor="survey">{value} / 4</label>
      <ProgressBar id="survey" max="100" value={value * 25}></ProgressBar>
    </ProgressContainer>
  );
}
