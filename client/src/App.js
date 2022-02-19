import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userProfileState } from "Atoms";
import { CookiesProvider, useCookies } from "react-cookie";
import { setAxiosDefaultAccessToken, setAccessTokenIntoCookie } from "util";

import axios from "axios";
import GlobalStyle from "style/GlobalStyle";
import AuthRoute from "./components/AuthRoute";

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
  const [cookies, setCookie] = useCookies(["access_token"]);

  const handleToken = async () => {
    const url = "/api/users/refresh";
    const response = await axios.post(url);

    const JWT_EXPIRY_TIME = response.data.exp - Date.now();

    setAxiosDefaultAccessToken(response);
    setAccessTokenIntoCookie(response, setCookie);
    setTimeout(handleToken, JWT_EXPIRY_TIME - 10 * 6000);
  };

  const handleUserProfile = async () => {
    const url = "/api/users/auth";
    const response = await axios.get(url);

    const { email, id, name, profileImg } = response.data;
    setUserProfile(oldUserProfile => {
      return { ...oldUserProfile, email, id, name, profileImg };
    });
  };

  const handleReload = async () => {
    try {
      await handleToken();
      await handleUserProfile();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleReload();
  }, []);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<AuthRoute redirect="/" component={<SignIn />} />}
          />
          <Route
            path="/signup"
            element={<AuthRoute redirect="/" component={<SignUp />} />}
          />
          <Route
            path="/mypage"
            element={
              <AuthRoute redirect="/login" login component={<MyPage />} />
            }
          />
          <Route path="/community" element={<Community />} />
          <Route
            path="/post"
            element={<AuthRoute redirect="/login" login component={<Post />} />}
          />
          <Route
            path="/post/:postId"
            element={<AuthRoute redirect="/login" login component={<Post />} />}
          />
          <Route path="/article/:postId" element={<Article />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/wiki" element={<Wiki />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
