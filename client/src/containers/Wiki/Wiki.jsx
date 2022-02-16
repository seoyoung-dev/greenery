import { useEffect, useState, useRef } from "react";

import Header from "components/Header";
import PlantGrid from "components/PlantGrid";
import WikiSearch from "components/WikiSearch";
import WikiFilter from "components/WikiFilter";
import Loading from "components/Loading";
import Pagination from "components/Pagination";

import { WideContainer } from "style/ContainerStyle";
import { dummyFetchPlant } from "api/plant";
import { WikiConatiner, PaginationContainer } from "./Wiki.style";

export default function Wiki() {
  const [searchQuery, setSearchQuery] = useState("");
  const [plantData, setPlantData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPlantCount, setTotalPlantCount] = useState(20);
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
    dummyFetchPlant(6, filter).then(data => {
      setPlantData(data);
    });

    // 서버 연결 준비
    // fetchPlantData(6, filter).then(({total, plants}) => {
    //   setTotalPlantCount(total)
    //   setPlantData(plants)
    // })
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

          <PaginationContainer>
            <Pagination
              currentPage={currentPage}
              onClickPage={setCurrentPage}
              pageCount={20}
              // pageCount={Math.ceil(totalPlantCount / 6)}
            />
          </PaginationContainer>
        </WikiConatiner>
      </WideContainer>
    </>
  );
}
