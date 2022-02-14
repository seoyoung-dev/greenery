import { useEffect, useState, useRef } from "react";

import Header from "components/Header";
import PlantGrid from "components/PlantGrid";
import WikiSearch from "components/WikiSearch";
import WikiFilter from "components/WikiFilter";
import Loading from "components/Loading";

import { WideContainer } from "style/ContainerStyle";
import fetchPlant from "api/plant";
import { WikiConatiner } from "./Wiki.style";

export default function Wiki() {
  const [plantData, setPlantData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRef = useRef({
    brightness: [],
    smell: [],
    bloomingSeason: [],
    growthHeight: [],
  });

  useEffect(() => {
    fetchPlantData();
  }, []);

  function fetchPlantData(filter) {
    fetchPlant(6, filter).then(data => {
      setPlantData(data);
    });
  }

  function handleSearch() {
    const filter = { search: searchQuery, ...filterRef.current };
    fetchPlantData(filter);
  }

  return (
    <>
      <WideContainer>
        <WikiConatiner>
          <Header />
          <WikiSearch setSearchQuery={setSearchQuery} onclick={handleSearch} />
          <WikiFilter filterRef={filterRef} />
          {plantData ? <PlantGrid data={plantData} /> : <Loading />}
        </WikiConatiner>
      </WideContainer>
    </>
  );
}
