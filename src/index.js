import "react-hot-loader/patch";
import React from "react";
import { render } from "react-dom";

import App from "components/App";

const renderApp = () => <App />;

const root = document.getElementById("app");
render(renderApp(), root);

if (module.hot) {
  module.hot.accept("components/App", () => {
    require("components/App");
    render(renderApp(), root);
  });
}
