import { Link } from "react-router-dom";
import { Container, Nav, Detail, Button, NavCard } from "./ImgCard.style";

export default function ServiceNav() {
  return (
    <Container>
      <Nav>
        <NavCard imgUrl="/img/plant.png">
          <Detail>당신에게 어울리는</Detail>
          <Detail>반려 식물</Detail>
          <Link to="/recommendation">
            <Button>식물 추천</Button>
          </Link>
        </NavCard>
        <NavCard imgUrl="/img/community.png">
          <Detail>반려 식물과</Detail>
          <Detail>오랫동안 함께하기</Detail>
          <Link to="/community">
            <Button>커뮤니티</Button>
          </Link>
        </NavCard>
      </Nav>
    </Container>
  );
}
