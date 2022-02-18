import { useEffect } from "react";
import {
  Modal,
  BlurBackground,
  DetailContainer,
  ImageContainer,
  Header,
  Main,
  Footer,
  CloseButton,
  MetaLeft,
  MetaRight,
} from "./PlantDetail.style";

export default function PlantDetail({ onClose, plant_info }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  function closeModal() {
    onClose(false);
  }
  return (
    <BlurBackground>
      <Modal>
        <CloseButton onClick={closeModal}>
          <img src="icon/close.svg" alt="Close icon" />
        </CloseButton>
        <DetailContainer>
          <ImageContainer>
            <img
              src={`http://www.nongsaro.go.kr/${plant_info.fileRoute}/${plant_info.thumbnailFileName[0]}`}
              alt={plant_info.plantName}
            />
          </ImageContainer>
          <Header>
            <h1>{plant_info.plantName}</h1>
          </Header>
          <Main>
            <p>
              {plant_info.functionalInfo
                ? plant_info.functionalInfo
                : plant_info.specialManage}
            </p>
          </Main>
          <Footer>
            <MetaLeft>
              <p>· 원산지 : {plant_info.originInfo}℃</p>
              <p>· 생육 습도 : {plant_info.humidity}%</p>
              <p>· 성장 높이 : {plant_info.growthHeight}cm</p>
            </MetaLeft>
            <MetaRight>
              <p>· 물주기 봄 : {plant_info.waterCycle[0]}</p>
              <p>· 물주기 여름 : {plant_info.waterCycle[1]}</p>
              <p>· 물주기 가을 : {plant_info.waterCycle[2]}</p>
              <p>· 물주기 겨울 : {plant_info.waterCycle[3]}</p>
            </MetaRight>
          </Footer>
        </DetailContainer>
      </Modal>
    </BlurBackground>
  );
}
