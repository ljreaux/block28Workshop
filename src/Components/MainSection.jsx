import { Route, Routes } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Yellow from "./Yellow";
import Home from "./Home";

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>
    </div>
  );
}
