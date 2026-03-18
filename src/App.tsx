import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Router from "./Router";
import { HashRouter } from "react-router";

createRoot(document.querySelector("main")!).render(
  <div className="min-h-screen bg-gray-100">
    <HashRouter>
      <Header />
      <Router />
    </HashRouter>
  </div>,
);
