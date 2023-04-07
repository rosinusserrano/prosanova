import "./App.css";
import React, { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import "./styles/imprint.css";
import Imprint from "./contents/Imprint";
import HomePage from "pages/HomePage";


function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route
            index
            element={<HomePage></HomePage>}
          />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;
