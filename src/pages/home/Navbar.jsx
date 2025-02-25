import React from "react";
import "../../styles/navbar/Navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Otra Cosita
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/login">Sesion</a>
      </nav>
    </header>
  );
};

export default Navbar;
