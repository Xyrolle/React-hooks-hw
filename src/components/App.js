import React from "react";
import { ThemeProvider } from "styled-components";

// https://github.com/diegohaz/arc/wiki/Styling
import theme from "./themes/default";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
