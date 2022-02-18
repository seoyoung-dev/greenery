import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function AuthRoute({ component, redirect, login }) {
  const [cookies, setCookie] = useCookies([]);
  useEffect(() => {
    if (login && !cookies.access_token) {
      alert("로그인 되어 있지 않습니다. 로그인페이지로 이동합니다.");
    } else if (!login && cookies.access_token) {
      alert("로그인 되어 있습니다!");
    }
  }, []);

  if (!login) {
    return cookies.access_token ? <Navigate to={redirect} /> : component;
  }
  return !cookies.access_token ? <Navigate to={redirect} /> : component;
}
