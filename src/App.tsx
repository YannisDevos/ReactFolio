import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Router from "./Router";
import { HashRouter } from "react-router";
import Footer from "./Footer";

createRoot(document.querySelector("main")!).render(
  <div className="min-h-screen">
    <HashRouter>
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  </div>,
);
