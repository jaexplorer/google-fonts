import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('../../assets/fonts/Roboto') format('woff2');
  };
  body {
    font-family: 'Roboto';
    max-width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;
