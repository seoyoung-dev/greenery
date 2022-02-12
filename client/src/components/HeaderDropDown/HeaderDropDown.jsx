import axios from "axios";

import { LayoutUserTap, DropDownMenus } from "./HeaderDropDown.style";

export default function HeaderDropDown({ SimpleItem }) {
  const dummyState = true;

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

  return (
    <LayoutUserTap>
      <DropDownMenus>
        {dummyState ? (
          <>
            <SimpleItem to={"/mypage"} title="마이페이지" />
            <SimpleItem
              to={"#"}
              title="로그아웃"
              borderTop={"1px solid #C4C4C4"}
              handleLogout={handleLogout}
            />
          </>
        ) : (
          <>
            <SimpleItem to={"/signin"} title="로그인" />
            <SimpleItem to={"/signup"} title="회원가입" />
          </>
        )}
      </DropDownMenus>
    </LayoutUserTap>
  );
}
