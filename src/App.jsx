import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
