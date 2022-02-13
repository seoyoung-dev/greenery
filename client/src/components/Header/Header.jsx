import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "Store";
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
  PostButton,
} from "./Header.style";

import HomeLogo from "components/HomeLogo";
import HeaderDropDown from "components/HeaderDropDown";
import SimpleItem from "components/SimpleItem";

export default function Header(props) {
  const [isDropDown, setIsDropDown] = useState(false);
  const user = useRecoilValue(userState);
  const menusData = [
    {
      title: "커뮤니티",
      to: "/community",
    },
    {
      title: "식물추천",
      to: "/recommendation",
    },
    {
      title: "초록위키",
      to: "/wiki",
    },
  ];

  //event handler
  function focusHandler() {
    setIsDropDown(!isDropDown);
  }
  function blurHandler(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDropDown(false);
    }
  }
  return (
    <HeaderTag>
      <NavigationBarContainer>
        <LayoutNavigationLeft id="left">
          <HomeLogo />
        </LayoutNavigationLeft>
        <LayoutNavigationMenu>
          <MenuItems>
            {menusData.map(({ title, to }, index) => {
              return <SimpleItem key={index} title={title} to={to} />;
            })}
          </MenuItems>
        </LayoutNavigationMenu>
        <LayoutNavigationRight>
          <UserNavigationWrap onBlur={e => blurHandler(e)}>
            {props.id === "PostPage" ? (
              <PostButton form="test">올리기</PostButton>
            ) : (
              <UserNavButton onClick={focusHandler}>
                <HambergIconWrap>
                  <img src="icon/hamburger.svg" alt="hamburger" />
                </HambergIconWrap>
                <UserIconWrap>
                  <img src="icon/user.svg" alt="usericon" />
                </UserIconWrap>
              </UserNavButton>
            )}
            {isDropDown && <HeaderDropDown user={user} />}
          </UserNavigationWrap>
        </LayoutNavigationRight>
      </NavigationBarContainer>
    </HeaderTag>
  );
}
