import { Link } from "react-router-dom";
import { useState } from "react";

import {
  HeaderTag,
  LayoutNavigationLeft,
  LayoutNavigationMenu,
  LayoutNavigationRight,
  LayoutUserTap,
  NavigationBarContainer,
  UserNavigationWrap,
  HambergIconWrap,
  UserIconWrap,
  UserNavButton,
  MenuItems,
  Item,
} from "./Header.style";

import { ReactComponent as UserIcon } from "components/Icon/usericon.svg";
import { ReactComponent as HambergIcon } from "components/Icon/hambergicon.svg";

import { HomeLogo } from "components/HomeLogo/HomeLogo";

export function Header() {
  const [isClick, setIsClick] = useState(false);

  const SimpleItem = ({ title, to }) => {
    return (
      <Item key={(title, to)}>
        <Link to={to}>{title}</Link>
      </Item>
    );
  };

  function UserTap() {
    return (
      <LayoutUserTap>
        <ul className="user-tap">
          <SimpleItem
            to={"/signin"}
            title="로그인"
            option={"user"}
          ></SimpleItem>
          <SimpleItem to={"/signup"} title="회원가입"></SimpleItem>
        </ul>
      </LayoutUserTap>
    );
  }
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
            <UserNavButton
              onClick={() => {
                setIsClick(prev => !prev);
              }}
            >
              <HambergIconWrap>
                <HambergIcon width="100%" display="block" />
              </HambergIconWrap>
              <UserIconWrap>
                <UserIcon display="block" />
              </UserIconWrap>
            </UserNavButton>
          </UserNavigationWrap>
          {isClick && <UserTap />}
        </LayoutNavigationRight>
      </NavigationBarContainer>
    </HeaderTag>
  );
}
