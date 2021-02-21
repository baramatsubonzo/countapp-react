import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CountApp from "./CountApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CountApp />
  </StrictMode>,
  rootElement
);
