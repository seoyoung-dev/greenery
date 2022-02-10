import { useState } from "react";

import { recommendation_dummy } from "../../api/data";
import PlantDetail from "../PlantDetail";
import {
  GridContainer,
  ImageContainer,
  PlantCard,
  Description,
} from "./PlantGrid.style";

export default function PlantGrid({ filtered_data }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});

  console.log(filtered_data);
  return (
    <GridContainer>
      {recommendation_dummy.map(data => {
        return (
          <PlantCard
            key={data.id}
            onClick={() => {
              setDetailOpen(true);
              setSelectedPlant({ ...selectedPlant, ...data });
            }}
          >
            <ImageContainer>
              <img src={data.photo} alt={data.name_kor} />
            </ImageContainer>
            <Description>
              <h3>{data.name_kor}</h3>
              <p className="description">{data.description}</p>
              <p className="origin">원산지: {data.origin}</p>
            </Description>
          </PlantCard>
        );
      })}
      {detailOpen && (
        <PlantDetail onClose={setDetailOpen} plant_info={selectedPlant} />
      )}
    </GridContainer>
  );
}
