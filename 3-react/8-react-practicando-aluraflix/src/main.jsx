import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme.js";
import GlobalStyles from "./Styles/GlobalStyles.js";

import { VideoProvider } from "./Contexts/VideoContext.jsx";
import AppRoutes from "./routes.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <VideoProvider>  {/*!--prop value y children-->*/}
        <AppRoutes />
      </VideoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
