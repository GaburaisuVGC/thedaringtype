import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Approach from './pages/Approach';
import Services from './pages/Services';
import Legal from './pages/Legal';
import CGV from "./pages/CGV";
import "./App.css";
import Lab from "./pages/Lab";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
