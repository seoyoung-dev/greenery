import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "style/GlobalStyle";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Community from "./pages/Community";
import Post from "./pages/Post";
import Article from "./pages/Article";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/post" element={<Post />} />
        <Route
          path="/post/:postId"
          element={<Post postId="620a8815403fd6e972e9b41b" />}
        />
        <Route exact path="/article" element={<Article />} />
        <Route path="/article/:postId" element={<Article />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
