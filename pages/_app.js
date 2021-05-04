import { ThemeProvider } from "styled-components";
import GlobalStyled from "@/GlobalStyled";
import theme from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
