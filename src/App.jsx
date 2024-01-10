import { Route, Routes, Link } from "react-router-dom";
import Red from "./Components/Red";
import Blue from "./Components/Blue";
import Home from "./Components/Home";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/red"}>Red</Link>
        <Link to={"/blue"}>Blue</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
