import styled from "styled-components";

export const LayoutUserTap = styled.div`
  width: 150px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  position: absolute;
  padding: 10px 0;

  top: calc(100% + 5px);
  right: 0;

  & ul {
    padding: 0;
    margin: 0;
  }
  & li {
    list-style: none;
    padding: 10px 25px;
  }
  & a {
    text-decoration: none;
    color: black;
  }
`;

export const DropDownMenus = styled.ul``;
export const LogoutWrap = styled.div`
  border-top: 1px solid #797979;
`;
