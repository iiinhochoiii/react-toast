import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyles from "@/styles/global";
import { Toast } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
    <Toast />
  </StrictMode>,
);
