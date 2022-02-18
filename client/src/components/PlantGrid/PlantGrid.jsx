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
              <img
                src={`http://www.nongsaro.go.kr/${plant.fileRoute}/${plant.thumbnailFileName[0]}`}
                alt={plant.plantName}
              />
            </ImageContainer>
            <Description>
              <h3>{plant.plantName}</h3>
              <p className="description">
                {plant.functionalInfo
                  ? plant.functionalInfo
                  : plant.specialManage}
              </p>
              <p className="origin">원산지: {plant.originInfo}</p>
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
