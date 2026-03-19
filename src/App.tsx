import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Router from "./Router";
import { HashRouter } from "react-router";
import Footer from "./Footer";
import VantaBackground from "./VantaBackground";

createRoot(document.querySelector("main")!).render(
  <>
    <VantaBackground />
    <HashRouter>
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  </>,
);
