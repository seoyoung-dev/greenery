import styled from "styled-components";

export const GridContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const PlantCard = styled.div`
  background: #fefefe;
  width: 550px;
  display: flex;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ImageContainer = styled.figure`
  margin: 0;
  width: 200px;
  img {
    width: 150px;
    margin: 25px 0 25px 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Description = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  h3 {
    margin-top: 0;
  }

  p.description {
    font-size: 0.9rem;
    color: var(--primary-dark);
    font-weight: bolder;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p.origin {
    color: var(--primary-light);
    font-weight: bolder;
    font-size: 0.9rem;
    margin-bottom: 0;
  }
`;
