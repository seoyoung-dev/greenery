import styled from "styled-components";

const HeaderTag = styled.header`
  background: white;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  padding: 0 10px;
`;

const NavigationBarContainer = styled.div`
  box-sizing: border-box;
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 60px;

  @media (min-width: 768px) {
    height: 90px;
  }
`;

const LayoutNavigationLeft = styled.div``;
const LayoutNavigationMenu = styled.nav`
  margin-left: 70px;
  flex: none;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;
const LayoutNavigationRight = styled.nav`
  position: relative;
  justify-self: right;
  margin-left: auto;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0px;

  li {
    margin-right: 25px;
  }
  a {
    text-decoration: none;
    color: var(--text);
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    li {
      margin-right: 15px;
    }
    a {
      font-size: 0.85rem;
    }
  }
`;

const UserNavButton = styled.button`
  height: 40px;
  padding: 0;
  background: #ffffff;
  border: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 80px;
    border: 1px solid #eaeaea;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  font-weight: bold;
  color: var(--highlight-text);
  background: var(--primary);
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    border-radius: 5px;
    font-size: 1rem;
    padding: 10px 30px;
  }
`;

const HamburgIconWrap = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 16px;
    height: 16px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const UserIconWrap = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserNavigationWrap = styled.div``;
export {
  HeaderTag,
  LayoutNavigationLeft,
  LayoutNavigationMenu,
  LayoutNavigationRight,
  NavigationBarContainer,
  UserNavigationWrap,
  HamburgIconWrap,
  UserIconWrap,
  MenuItems,
  UserNavButton,
  PostButton,
};
