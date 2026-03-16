import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.querySelector("main")!).render(
  <StrictMode>
    <h1 className="bg-amber-500 text-3xl font-bold underline">Hello, World!</h1>
  </StrictMode>,
);
