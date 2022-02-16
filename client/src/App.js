import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userProfileState } from "Atoms";
import { CookiesProvider, useCookies } from "react-cookie";

import axios from "axios";
import GlobalStyle from "style/GlobalStyle";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyPage from "./pages/MyPage";
import Community from "./pages/Community";
import Post from "./pages/Post";
import Article from "./pages/Article";
import Recommendation from "./pages/Recommendation";
import Wiki from "./pages/Wiki";

function App() {
  const setUserProfile = useSetRecoilState(userProfileState);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  // 페이지 리로드시 access_token을 재발급받기
  const refreshAccessToken = async () => {
    const url = "/api/users/refresh";
    try {
      const response = await axios.post(url);
      setAxiosDefaultAccessToken(response);
      setAccessTokenIntoCookie(response);
    } catch (err) {
      console.error(err);
    }
  };

  // response의 access_token을 axios.defaults로 설정하기
  const setAxiosDefaultAccessToken = response => {
    const { access_token } = response.data;

    axios.defaults.headers.common["Authorization"] = access_token;
  };

  const setAccessTokenIntoCookie = response => {
    const JWT_EXPIRY_TIME = 3600 * 1000;
    setCookie("access_token", response.data.access_token, {
      path: "/",
      maxAge: 3600,
      secure: true,
      // httpOnly: true 도메인이 달라서 그런것 같다.
    });
    // 10분 전에 로그인 연장
    setTimeout(refreshAccessToken, JWT_EXPIRY_TIME - 100 * 6000);
  };
  //
  const handleUserProfile = async () => {
    const url = "/api/users/auth";
    try {
      const response = await axios.get(url);
      const { email, id, name } = response.data;
      setUserProfile(oldUserProfile => {
        return { ...oldUserProfile, email, id, name };
      });
    } catch (err) {
      console.error(err);
    }
  };
  const reloadHandler = async () => {
    try {
      await refreshAccessToken();
      await handleUserProfile();
    } catch (err) {
      console.error(err);
    }
  };

  // 완료가 되면 userProfileState에 저장하기
  useEffect(() => {
    refreshAccessToken();
    reloadHandler();
  });

  return (
    <CookiesProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/post" element={<Post />} />
          <Route
            path="/post/:postId"
            element={<Post postId="620d091db133f690ba9d2781" />}
          />
          <Route path="/article" element={<Article />} />
          {/* <Route path="/article/:postId" element={<Article />} /> */}
          <Route path="/article/:postId" element={<Article />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/wiki" element={<Wiki />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
