import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardComplete from "./pages/card-complete";
import CardDetail from "./pages/card-detail";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CardDetail />} />
          <Route path="/card-complete" element={<CardComplete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
