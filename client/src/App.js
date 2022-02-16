import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userProfileState } from "Atoms";
import { CookiesProvider } from "react-cookie";

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
import { useCookies } from "react-cookie";

function App() {
  const setUserProfile = useSetRecoilState(userProfileState);
  const [cookies, setCookie] = useCookies();
  // 페이지 리로드시 access_token을 재발급받기
  const refreshAccessToken = async () => {
    const url = "/users/refresh";
    try {
      const response = await axios.post(url);
      setAxiosDefaultAccessToken(response);
      setCookie("access_token", response.data.access_token, {
        path: "/",
        maxAge: 3600,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // response의 access_token을 axios.defaults로 설정하기
  const setAxiosDefaultAccessToken = response => {
    const { access_token } = response.data;

    axios.defaults.headers.common["Authorization"] = access_token;
  };
  //
  const handleUserProfile = async () => {
    const url = "users/auth";
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

  console.log(axios.defaults.headers);

  // 완료가 되면 userProfileState에 저장하기
  useEffect(() => {
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
            element={<Post postId="620aa3908dd9226e99b57cbc" />}
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
