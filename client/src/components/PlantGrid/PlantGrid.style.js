import styled from "styled-components";

export const GridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const PlantCard = styled.div`
  background: #fefefe;
  width: clamp(0px, 100%, 550px);
  padding: 25px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      rgba(69, 186, 102, 0.1),
      rgba(69, 186, 102, 0.1)
    );
  }
`;

export const ImageContainer = styled.figure`
  margin: 0;
  width: clamp(0px, 100%, 200px);
  img {
    width: 100%;
    border-radius: 3px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-left: 20px;
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
