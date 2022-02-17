import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useResetRecoilState } from "recoil";
import { userProfileState } from "Atoms";
import {
  LayoutUserTap,
  DropDownMenus,
  LogoutWrap,
} from "./HeaderDropDown.style";
import { SimpleItem } from "components";

import axios from "axios";

export default function HeaderDropDown() {
  const resetUserState = useResetRecoilState(userProfileState);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  const access_token = cookies["access_token"];
  const beforeLoginItems = [
    {
      title: "로그인",
      to: "/login",
    },
    {
      title: "회원가입",
      to: "/signup",
    },
  ];
  const afterLoginItems = [
    {
      title: "마이페이지",
      to: "/mypage",
      logout: false,
    },
    {
      title: "로그아웃",
      to: "/",
      logout: true,
    },
  ];

  const onLogoutRequest = async () => {
    const url = "api/users/logout";
    try {
      const response = await axios.get(url);
      return response;
    } catch (err) {
      throw new Error("로그아웃이 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const removeAccessToken = () => {
    delete axios.defaults.headers.common.Authorization;
  };
  const removeAccessTokenByCookie = () => {
    removeCookie("access_token");
  };

  const handleLogout = async () => {
    await onLogoutRequest()
      .then(() => {
        removeAccessToken();
        removeAccessTokenByCookie();
        resetUserState();
      })
      .then(() => navigate("/login"))
      .catch(err => alert(err.message));
  };

  const renderSimpleItem = (datas, handleLogout) => {
    const simpelList = datas.map(({ title, to, logout }, index) => {
      return logout ? (
        <LogoutWrap key={index}>
          <SimpleItem to={to} title={title} handleLogout={handleLogout} />
        </LogoutWrap>
      ) : (
        <SimpleItem key={index} to={to} title={title} />
      );
    });
    return simpelList;
  };
  return (
    <LayoutUserTap>
      <DropDownMenus>
        {access_token
          ? renderSimpleItem(afterLoginItems, handleLogout)
          : renderSimpleItem(beforeLoginItems)}
      </DropDownMenus>
    </LayoutUserTap>
  );
}
