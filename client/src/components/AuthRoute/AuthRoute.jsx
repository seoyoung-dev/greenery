import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userProfileState } from "Atoms";
import { useLayoutEffect } from "react";

export default function AuthRoute({ component, redirect, login }) {
  const userInformation = useRecoilValue(userProfileState);
  useLayoutEffect(() => {
    if (login && !userInformation.id) {
      alert("로그인 되어 있지 않습니다. 로그인페이지로 이동합니다.");
    } else if (!login && userInformation.id) {
      alert("로그인 되어 있습니다!");
    }
  }, []);

  if (!login) {
    return userInformation.id ? <Navigate to={redirect} /> : component;
  }
  return !userInformation.id ? <Navigate to={redirect} /> : component;
}
