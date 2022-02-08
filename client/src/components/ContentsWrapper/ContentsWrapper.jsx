import React from "react";
import {
  Container,
  Title,
  Main,
  More,
  Contents,
  Content,
} from "./ContentsWrapper.style";

export default function ContentsWrapper() {
  return (
    <Container>
      <Title>
        <Main>많이 본 초록이들</Main>
        <More>더 많은 초록이들 보기</More>
      </Title>
      <Contents>
        <Content></Content>
        <Content></Content>
        <Content></Content>
      </Contents>
    </Container>
  );
}
