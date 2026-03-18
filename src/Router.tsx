import { Routes, Route } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/projects" element={<div>projects</div>} />
      <Route path="/studies" element={<div>studies</div>} />
      <Route path="/contact" element={<div>contact</div>} />
    </Routes>
  );
}
