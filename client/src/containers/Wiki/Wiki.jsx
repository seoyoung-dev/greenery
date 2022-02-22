import { useEffect, useState, useRef } from "react";

import {
  Header,
  PlantGrid,
  WikiSearch,
  WikiFilter,
  Loading,
  Pagination,
} from "components";

import { WideContainer } from "style/ContainerStyle";
import { fetchPlant } from "api/plant";
import { WikiConatiner, PaginationContainer } from "./Wiki.style";

export default function Wiki() {
  const [plantData, setPlantData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPlantCount, setTotalPlantCount] = useState(0);
  const filterRef = useRef({
    brightness: [],
    smell: [],
    bloomingSeason: [],
    growthHeight: [],
  });

  const searchRef = useRef("");
  useEffect(() => {
    fetchPlantData();
  }, [currentPage]);

  async function fetchPlantData(search) {
    const {
      data: { total, plants },
    } = await fetchPlant({
      count: 6,
      search: searchRef.current,
      filter: filterRef.current,
      currentPage,
    });

    setTotalPlantCount(Number(total));
    setPlantData(plants);
  }

  function handleSearch(evt) {
    evt.preventDefault();
    resetCurrentPage();
    fetchPlantData();
  }

  function resetCurrentPage() {
    setCurrentPage(1);
  }

  return (
    <>
      <WideContainer>
        <WikiConatiner>
          <Header />
          <WikiSearch searchRef={searchRef} handleSearch={handleSearch} />
          <WikiFilter filterRef={filterRef} />
          {plantData ? (
            <>
              <PlantGrid data={plantData} />
              <PaginationContainer>
                <Pagination
                  currentPage={currentPage}
                  onClickPage={setCurrentPage}
                  pageCount={Math.ceil(totalPlantCount / 6)}
                />
              </PaginationContainer>
            </>
          ) : (
            <Loading />
          )}
        </WikiConatiner>
      </WideContainer>
    </>
  );
}
