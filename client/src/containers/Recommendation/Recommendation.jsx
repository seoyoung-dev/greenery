import { useState } from "react";
import {
  Modal,
  Button,
  CenterContainer,
  Header,
  IntroContainer,
} from "./Recommendation.style";
import Survey from "../../components/Survey/Survey";
import PlantGrid from "../../components/PlantGrid";

export default function Recommendation() {
  const [progress, setProgress] = useState(0);
  const [filteredData, setFilteredData] = useState({
    brightness: "",
    smell: "",
    bloomingSeason: "",
    growthHeight: "",
  });

  function increaseProgress() {
    setProgress(progress + 1);
  }
  function decreaseProgress() {
    setProgress(progress - 1);
  }
  function saveAnswer(type, num) {
    const newData = { ...filteredData };
    newData[type] = num;
    setFilteredData(newData);
  }

  function reset() {
    setProgress(0);
    setFilteredData({
      brightness: "",
      smell: "",
      bloomingSeason: "",
      growthHeight: "",
    });
  }

  let element;
  // 설문 인트로
  if (progress === 0) {
    element = (
      <IntroContainer>
        <Header>
          <h1>
            <span className="green">초록친구</span>가,
          </h1>
          <h1>딱 맞는 초록이를 추천해 드릴게요 :)</h1>
          <h1>
            그럼 초록이를 찾으러 가볼까요?
            <span className="small"> (*약 2분 소요)</span>
          </h1>
        </Header>
        <Button onClick={increaseProgress}>시작하기</Button>
      </IntroContainer>
    );

    // 설문 진행중
  } else if (1 <= progress && progress <= 4) {
    element = (
      <Survey
        progress={progress}
        element={element}
        answers={filteredData}
        saveAnswer={saveAnswer}
        decreaseProgress={decreaseProgress}
        increaseProgress={increaseProgress}
      />
    );

    // 설문 완료 - 추천 결과
  } else {
    element = (
      <>
        <Header>
          <h1>초록친구</h1>
          <h1>함께하길 기다리는 초록이</h1>
        </Header>
        <PlantGrid filtered_data={filteredData} />
        <Button onClick={reset}>다시하기</Button>
      </>
    );
  }

  return (
    <Modal>
      <CenterContainer>{element}</CenterContainer>
    </Modal>
  );
}
