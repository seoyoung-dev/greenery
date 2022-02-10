import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  :root {
  --text: #000000;
  --light-text: #121212;
  --hightlight-text: #ffffff;
  --primary: #45BA66;
  --primary-dark: #5B734E;
  --primary-light: #69BF3B;
  --bg: #ffffff;
  --bg-linear: linear-gradient(107.56deg, #DEF9F6 0%, #F9EBDE 100%);
}

`;

export default GlobalStyle;
