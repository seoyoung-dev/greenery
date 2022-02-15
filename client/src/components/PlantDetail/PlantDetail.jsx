import {
  Modal,
  BlurBackground,
  DetailContainer,
  ImageContainer,
  Header,
  Main,
  Footer,
  CloseButton,
} from "./PlantDetail.style";

export default function PlantDetail({ onClose, plant_info }) {
  return (
    <BlurBackground>
      <Modal>
        <CloseButton onClick={() => onClose(false)}>
          <img src="icon/close.svg" alt="Close icon" />
        </CloseButton>
        <DetailContainer>
          <ImageContainer>
            <img src={plant_info.photo} alt={plant_info.name_kor} />
          </ImageContainer>
          <Header>
            <h1>{plant_info.name_kor}</h1>
            <h3>({plant_info.name_eng})</h3>
          </Header>
          <Main>
            <p>{plant_info.description}</p>
          </Main>
          <Footer>
            <p>· 원산지 : {plant_info.temperature}℃</p>
            <p>· 생육 온도 : {plant_info.origin}</p>
            <p>· 생육 습도 : {plant_info.humidity}%</p>
            <p>· 성장 높이 : {plant_info.height}cm</p>
          </Footer>
        </DetailContainer>
      </Modal>
    </BlurBackground>
  );
}
