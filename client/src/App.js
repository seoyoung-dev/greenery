import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "style/GlobalStyle";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Community from "./pages/Community";
import Post from "./pages/Post";
import Article from "./pages/Article";
import Recommendation from "./pages/Recommendation";
import { RecoilRoot } from "recoil";
import Wiki from "./pages/Wiki";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
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
    </RecoilRoot>
  );
}

export default App;
