import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/features/authSlice";
import "../../styles/navbar/navbar.css";
import { MdSettings } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { logoutSession } from "../../services/logout";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const username = useSelector((state) => state.auth.username);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    try {
      await logoutSession();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Error verificando sesión:", error);
      dispatch(logout());
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        Otra Cosita
      </a>
      <nav className="navbar">
        <a href="/register">Registro</a>
        <a href="#">Contacto</a>
        {isAuthenticated ? (
          <div className={`menu-container ${menuOpen ? "open" : ""}`}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu-button"
            >
              {username}
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <a href="/settings">
                  <MdSettings className="icon" />
                  <span>Opciones</span>
                </a>
                <a onClick={handleLogout}>
                  <IoLogOut className="icon" />
                  <span>Cerrar Sesión</span>
                </a>
              </div>
            )}
          </div>
        ) : (
          <button className="menu-button" onClick={() => navigate("/login")}>
            Iniciar Sesión
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
