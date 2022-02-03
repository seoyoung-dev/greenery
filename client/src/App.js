import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "style/GlobalStyle";

import Home from "pages/Home";
import SignUp from "pages/SignUp";
import Login from "pages/Login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
