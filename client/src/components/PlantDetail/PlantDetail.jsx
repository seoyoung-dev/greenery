import { useEffect, useRef } from "react";
import {
  Modal,
  BlurBackground,
  DetailContainer,
  ImageContainer,
  Header,
  Description,
  Footer,
  CloseButton,
  MetaBox,
} from "./PlantDetail.style";

export default function PlantDetail({ onClose, plant_info }) {
  const modalRef = useRef();

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

  function closeModalByClickOutside(evt) {
    if (modalRef.current === evt.target) {
      onClose(false);
    }
  }
  return (
    <BlurBackground ref={modalRef} onClick={closeModalByClickOutside}>
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
          <Description>
            <p>
              {plant_info.functionalInfo
                ? plant_info.functionalInfo
                : plant_info.specialManage}
            </p>
          </Description>
          <Footer>
            <MetaBox>
              <p>
                <span>원산지 :</span> {plant_info.originInfo}℃
              </p>
              <p>
                <span>생육 습도 :</span> {plant_info.humidity}%
              </p>
              <p>
                <span>성장 높이 :</span> {plant_info.growthHeight}
                {plant_info.growthHeight === 150 ? "cm 이상" : "cm"}
              </p>
            </MetaBox>
            <MetaBox>
              <p>
                <span>광도 :</span> {plant_info.brightness.join(", ")}
              </p>
              <p>
                <span>향기 :</span> {plant_info.smell}
              </p>
              <p>
                <span>꽃피는 계절 :</span>{" "}
                {plant_info.bloomingSeason.join(", ")}
              </p>
            </MetaBox>

            <MetaBox>
              <p>
                <span>물주기 봄 :</span> {plant_info.waterCycle[0]}
              </p>
              <p>
                <span>물주기 여름 :</span> {plant_info.waterCycle[1]}
              </p>
              <p>
                <span>물주기 가을 :</span> {plant_info.waterCycle[2]}
              </p>
              <p>
                <span>물주기 겨울 :</span> {plant_info.waterCycle[3]}
              </p>
            </MetaBox>
          </Footer>
        </DetailContainer>
      </Modal>
    </BlurBackground>
  );
}
