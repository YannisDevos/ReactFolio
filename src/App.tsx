import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Router from "./Router";
import { HashRouter } from "react-router";

createRoot(document.querySelector("main")!).render(
  <HashRouter>
    <Header />
    <Router />
  </HashRouter>,
);
