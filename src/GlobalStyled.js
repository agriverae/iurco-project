import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  html {
    font-family:'Montserrat','Oswald', 'Poppins',sans-serif;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyled;
