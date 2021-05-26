import { ThemeProvider } from "styled-components";
import GlobalStyled from "@/GlobalStyled";
import theme from "@/theme";
import { LangProvider } from "@/Context/language";

export default function App({ Component, pageProps }) {
  return (
    <LangProvider lang={"spanish"}>
      <GlobalStyled />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LangProvider>
  );
}
