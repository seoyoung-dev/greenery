import styled from "styled-components";

const HeaderTag = styled.header`
  background: white;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
`;

const NavigationBarContainer = styled.div`
  box-sizing: border-box;
  height: 90px;
  max-width: 1150px;
  padding: 10px 20px 10px 20px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`;

const LayoutNavigationLeft = styled.div`
  /* flex: none; */
`;
const LayoutNavigationMenu = styled.nav`
  flex: none;
`;
const LayoutNavigationRight = styled.nav`
  position: relative;
  justify-self: right;
  margin-left: auto;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;

  & a {
    text-decoration: none;
    color: black;
  }
  & li {
    margin-right: 20px;
  }
`;

const UserNavButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 50px;

  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PostButton = styled.button`
  width: 126px;
  height: 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;

  background: #45ba66;
  border-radius: 5px;
  border: none;
`;

const UserNavigationWrap = styled.div``;
const HambergIconWrap = styled.div``;
const UserIconWrap = styled.div``;
export {
  HeaderTag,
  LayoutNavigationLeft,
  LayoutNavigationMenu,
  LayoutNavigationRight,
  NavigationBarContainer,
  UserNavigationWrap,
  HambergIconWrap,
  UserIconWrap,
  MenuItems,
  UserNavButton,
  PostButton,
};
