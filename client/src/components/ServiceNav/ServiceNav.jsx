import React from "react";
import {
  Container,
  Nav,
  PlantRecommedNav,
  CommunityNav,
  Detail,
  Button,
} from "./ServiceNav.style";

export default function ServiceNav() {
  return (
    <Container>
      <Nav>
        <PlantRecommedNav>
          <Detail>당신에게 어울리는</Detail>
          <Detail>반려 식물</Detail>
          <Button>식물 추천</Button>
        </PlantRecommedNav>
        <CommunityNav>
          <Detail>반려 식물과</Detail>
          <Detail>오랫동안 함께하기</Detail>
          <Button>커뮤니티</Button>
        </CommunityNav>
      </Nav>
    </Container>
  );
}
