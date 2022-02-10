import { survey_data } from "../../api/data";
import Progress from "../Progress";
import { Button, Header, QuestionContainer, QuestionBar } from "./Survey.style";

export default function Survey({
  progress,
  element,
  answers,
  saveAnswer,
  decreaseProgress,
  increaseProgress,
}) {
  const [{ title, subtitle, questions, type }] = survey_data.filter(
    d => d.num === progress,
  );
  element = (
    <>
      <Progress value={progress} />
      <Header>
        <h1>{title}</h1>
        <h5>{subtitle && subtitle}</h5>
      </Header>
      <QuestionContainer>
        {questions.map(q => {
          return (
            <QuestionBar active={q.id === answers[type]} key={q.id}>
              <a href="#" onClick={() => saveAnswer(type, q.id)}>
                {q.text}
              </a>
            </QuestionBar>
          );
        })}
      </QuestionContainer>
      <footer>
        <Button onClick={decreaseProgress}>이전</Button>
        <Button onClick={increaseProgress}>다음</Button>
      </footer>
    </>
  );
  return element;
}
