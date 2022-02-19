import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userProfileState } from "Atoms";
import { HomeLogo, HeaderDropDown, SimpleItem } from "components";
import * as S from "./Header.style";

export default function Header(props) {
  const userProfile = useRecoilValue(userProfileState);
  const [isDropDown, setIsDropDown] = useState(false);
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
    <S.HeaderTag>
      <S.NavigationBarContainer>
        <S.LayoutNavigationLeft id="left">
          <HomeLogo />
        </S.LayoutNavigationLeft>
        <S.LayoutNavigationMenu>
          <S.MenuItems>
            {menusData.map(({ title, to }, index) => {
              return <SimpleItem key={index} title={title} to={to} />;
            })}
          </S.MenuItems>
        </S.LayoutNavigationMenu>
        <S.LayoutNavigationRight>
          <S.UserNavigationWrap onBlur={e => blurHandler(e)}>
            {props.id === "PostPage" ? (
              <S.PostButton form="PostFormSubmit">올리기</S.PostButton>
            ) : (
              <S.UserNavButton onClick={focusHandler}>
                <S.HamburgIconWrap>
                  <img src="/icon/hamburger.svg" alt="hamburger" />
                </S.HamburgIconWrap>
                <S.UserIconWrap>
                  <img
                    src={userProfile.profileImg || "/icon/user.svg"}
                    alt="usericon"
                  />
                </S.UserIconWrap>
              </S.UserNavButton>
            )}
            {isDropDown && <HeaderDropDown />}
          </S.UserNavigationWrap>
        </S.LayoutNavigationRight>
      </S.NavigationBarContainer>
    </S.HeaderTag>
  );
}
