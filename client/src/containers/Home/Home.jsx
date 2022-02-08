import React from "react";
import { Main } from "./Home.style";
import ContentsWrapper from "../../components/ContentsWrapper/ContentsWrapper";
import ServiceNav from "../../components/ServiceNav/ServiceNav";

export function Home() {
  return (
    <Main>
      <ContentsWrapper />
      <ServiceNav />
    </Main>
  );
}
