import { useRouter } from "next/router";
import { useRef } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";

import "../public/fonts/fonts.css";
import "../styles/globals.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../themes/index";
import createEmotionCache from "../config/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <div ref={containerRef}>
          <CssBaseline />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
