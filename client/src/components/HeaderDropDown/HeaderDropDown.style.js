import styled from "styled-components";

export const LayoutUserTap = styled.div`
  width: 150px;
  background: white;
  border: 1px solid var(--gray-light);
  border-radius: 10px;
  position: absolute;
  overflow: hidden;

  top: calc(100% + 5px);
  right: 0;

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  & a {
    display: block;
    text-decoration: none;
    color: black;
    padding: 15px 25px;
  }
  & a:hover {
    background-color: var(--gray-light);
  }
`;
export const LogoutWrap = styled.div`
  border-top: 1px solid var(--gray-light);
  & a {
    color: var(--red);
  }
`;

export const DropDownMenus = styled.ul``;
