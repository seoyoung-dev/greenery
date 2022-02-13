import { survey_data } from "./data";
import Progress from "../Progress";
import Button from "../Button";
import { Header, QuestionContainer, QuestionBar, Footer } from "./Survey.style";

export default function Survey({ progress, setProgress, answers, saveAnswer }) {
  const [{ title, subtitle, questions, type }] = survey_data.filter(
    d => d.num === progress,
  );

  function decreaseProgress() {
    setProgress(progress - 1);
  }
  function increaseProgress() {
    if (answers[type]) {
      setProgress(progress + 1);
    }
  }
  return (
    <>
      <QuestionContainer>
        <Progress value={progress} />
        <Header>
          <h1>{title}</h1>
          <h5>{subtitle && subtitle}</h5>
        </Header>
        {questions.map(q => {
          return (
            <QuestionBar active={q.id === answers[type]} key={q.id}>
              <a
                href="#null"
                onClick={evt => {
                  evt.preventDefault();
                  saveAnswer(type, q.id);
                }}
              >
                <img src={q.icon} alt="Question icon" />
                <span>{q.text}</span>
              </a>
            </QuestionBar>
          );
        })}
      </QuestionContainer>
      <Footer>
        <Button handleClick={decreaseProgress}>이전</Button>
        <Button handleClick={increaseProgress}>다음</Button>
      </Footer>
    </>
  );
}
