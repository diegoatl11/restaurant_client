import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/login/Register.jsx";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
