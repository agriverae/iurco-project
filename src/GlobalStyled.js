import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  html {
    font-family:'Montserrat','Oswald', 'Poppins',sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyled;
