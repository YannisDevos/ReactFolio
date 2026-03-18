import { Routes, Route } from "react-router";
import Home from "./Home";
import Projects from "./Projects";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/studies" element={<div>studies</div>} />
      <Route path="/contact" element={<div>contact</div>} />
    </Routes>
  );
}
