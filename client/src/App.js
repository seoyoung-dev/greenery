import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "style/GlobalStyle";

import Home from "pages/Home";
import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
