import {
  Container,
  Nav,
  PlantRecommedNav,
  CommunityNav,
  Detail,
  Button,
} from "./ImgCard.style";
import { Link } from "react-router-dom";

export default function ServiceNav() {
  return (
    <Container>
      <Nav>
        <PlantRecommedNav>
          <Detail>당신에게 어울리는</Detail>
          <Detail>반려 식물</Detail>
          <Link to="/recommendation">
            <Button>식물 추천</Button>
          </Link>
        </PlantRecommedNav>
        <CommunityNav>
          <Detail>반려 식물과</Detail>
          <Detail>오랫동안 함께하기</Detail>
          <Link to="/community">
            <Button>커뮤니티</Button>
          </Link>
        </CommunityNav>
      </Nav>
    </Container>
  );
}
