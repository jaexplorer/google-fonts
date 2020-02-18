import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto';
    max-width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overscroll-behavior: none;

    &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  
  #viewport {
  margin: 0 0 0 0;
  width: 100vw;
  position: fixed;
}
`;
