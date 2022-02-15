import { useState } from "react";

import PlantDetail from "../PlantDetail";
import {
  GridContainer,
  ImageContainer,
  PlantCard,
  Description,
} from "./PlantGrid.style";

export default function PlantGrid({ data }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});

  return (
    <GridContainer>
      {data.map(plant => {
        return (
          <PlantCard
            key={plant.id}
            onClick={() => {
              setDetailOpen(true);
              setSelectedPlant({ ...selectedPlant, ...plant });
            }}
          >
            <ImageContainer>
              <img src={plant.photo} alt={plant.name_kor} />
            </ImageContainer>
            <Description>
              <h3>{plant.name_kor}</h3>
              <p className="description">{plant.description}</p>
              <p className="origin">원산지: {plant.origin}</p>
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
