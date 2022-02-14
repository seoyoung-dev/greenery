import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderDropDown from "components/HeaderDropDown";

import {
  HeaderTag,
  LayoutNavigationLeft,
  LayoutNavigationMenu,
  LayoutNavigationRight,
  NavigationBarContainer,
  UserNavigationWrap,
  HambergIconWrap,
  UserIconWrap,
  UserNavButton,
  MenuItems,
  Item,
  PostButton,
} from "./Header.style";

import { HomeLogo } from "components/HomeLogo/HomeLogo";

export default function Header(props) {
  const [isClick, setIsClick] = useState(false);

  const SimpleItem = ({ to, title, borderTop, handleLogout }) => {
    return (
      <Item key={(title, to)} borderTop={borderTop}>
        <Link to={to} onClick={() => handleLogout()}>
          {title}
        </Link>
      </Item>
    );
  };

  return (
    <HeaderTag>
      <NavigationBarContainer>
        <LayoutNavigationLeft id="left">
          <HomeLogo />
        </LayoutNavigationLeft>
        <LayoutNavigationMenu>
          <MenuItems>
            <SimpleItem title={"커뮤니티"} to="/community"></SimpleItem>
            <SimpleItem title={"식물추천"} to="/recommendation"></SimpleItem>
            <SimpleItem title={"초록위키"} to="/wiki"></SimpleItem>
          </MenuItems>
        </LayoutNavigationMenu>
        <LayoutNavigationRight>
          <UserNavigationWrap>
            {props.id === "PostPage" ? (
              <PostButton form="PostFormSubmit">올리기</PostButton>
            ) : (
              <UserNavButton
                onClick={() => {
                  setIsClick(prev => !prev);
                }}
              >
                <HambergIconWrap>
                  <img src="/icon/hamburger.svg" alt="목록" />
                </HambergIconWrap>
                <UserIconWrap>
                  <img src="/icon/user.svg" alt="목록" />
                </UserIconWrap>
              </UserNavButton>
            )}
          </UserNavigationWrap>
          {isClick && <HeaderDropDown SimpleItem={SimpleItem} />}
        </LayoutNavigationRight>
      </NavigationBarContainer>
    </HeaderTag>
  );
}
