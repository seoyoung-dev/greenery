import styled from "styled-components";

export const Item = styled.li`
  font-weight: bold;
  border-top: ${props => props.borderTop || "none"};
`;
