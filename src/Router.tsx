import { Routes, Route } from "react-router";
import Home from "./Home";
import Projects from "./Projects";
import Studies from "./Studies";
import Contact from "./Contact";
import Details from "./Details";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/studies" element={<Studies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
