import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Survey from "../../components/Survey/Survey";
import PlantGrid from "../../components/PlantGrid";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { dummyFetchPlant } from "../../api/plant";
import { WideContainer } from "style/ContainerStyle";
import {
  Modal,
  CenterContainer,
  Header,
  IntroContainer,
  CloseButton,
  Nav,
  ButtonCotainer,
} from "./Recommendation.style";

export default function Recommendation() {
  const [progress, setProgress] = useState(0);
  const [plantData, setPlantData] = useState(null);
  const [filter, setFilter] = useState({
    brightness: [],
    smell: [],
    bloomingSeason: [],
    growthHeight: [],
  });

  useEffect(() => {
    if (isDataFilled(filter)) {
      dummyFetchPlant(2, filter).then(data => {
        setPlantData(data);
      });
    }
  }, [filter]);

  function addAnswerToFilter(type, answer) {
    const newData = { ...filter };
    newData[type][0] = answer;
    setFilter(newData);
  }

  function isDataFilled(filter_data) {
    const data = Object.entries(filter_data);
    for (let i = 0; i < data.length; i++) {
      if (data[i][1].length === 0) {
        return false;
      }
    }
    return true;
  }

  function increaseProgress() {
    setProgress(progress + 1);
  }

  function reset() {
    setProgress(0);
    setFilter({
      brightness: [],
      smell: [],
      bloomingSeason: [],
      growthHeight: [],
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
        <ButtonCotainer>
          <Button handleClick={increaseProgress}>시작하기</Button>
        </ButtonCotainer>
      </IntroContainer>
    );

    // 설문 진행중
  } else if (1 <= progress && progress <= 4) {
    element = (
      <Survey
        progress={progress}
        setProgress={setProgress}
        answers={filter}
        addAnswerToFilter={addAnswerToFilter}
      />
    );

    // 설문 완료 - 추천 결과
  } else {
    element = (
      <>
        <Header result>
          <img src="img/logo.svg" alt="logo" />
          <h1>함께하길 기다리는 초록이</h1>
        </Header>
        <Nav>
          <Link to="/wiki">더 많은 초록이들 보기</Link>
        </Nav>
        {plantData ? <PlantGrid data={plantData} /> : <Loading />}
        <ButtonCotainer>
          <Button handleClick={reset}>다시하기</Button>
        </ButtonCotainer>
      </>
    );
  }

  return (
    <Modal>
      <CloseButton to="/">
        <img src="icon/close.svg" alt="Close icon" />
      </CloseButton>
      <WideContainer>
        <CenterContainer>{element}</CenterContainer>
      </WideContainer>
    </Modal>
  );
}
