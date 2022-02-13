import axios from "axios";

import { LayoutUserTap, DropDownMenus } from "./HeaderDropDown.style";
import SimpleItem from "components/SimpleItem/SimpleItem";

export default function HeaderDropDown() {
  const isLogined = true;
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
    const url = "/users/logout";
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

  const handleLogout = async () => {
    await onLogoutRequest()
      .then(() => {
        removeAccessToken();
      })
      .catch(err => alert(err.message));
  };

  function renderSimpleItem(datas, handleLogout) {
    const simpelList = datas.map(({ title, to, logout }, index) => {
      return logout ? (
        <SimpleItem key={index} to={to} title={title} onClick={handleLogout} />
      ) : (
        <SimpleItem key={index} to={to} title={title} />
      );
    });
    return simpelList;
  }

  return (
    <LayoutUserTap>
      <DropDownMenus>
        {isLogined
          ? renderSimpleItem(beforeLoginItems)
          : renderSimpleItem(afterLoginItems, handleLogout)}
      </DropDownMenus>
    </LayoutUserTap>
  );
}
