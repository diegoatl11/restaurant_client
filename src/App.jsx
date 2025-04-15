import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/login/Register.jsx";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { accessUser } from "./services/accessUser.js";
import { userInfo, logout } from "./store/features/authSlice.js";
import RoleProtectedRoute from "./components/RoleProtectedRoute.jsx";
import "./styles/App.css";
import Unauthorized from "./pages/Unauthorized.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const verifySession = async () => {
      try {

        const response = await accessUser();
        if (response.status === 200) {
          dispatch(
            userInfo({
              userId: response.data.userId,
              username: response.data.username,
              roles: response.data.roles
            })
          );
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Error verificando sesión:", error);
        dispatch(logout());
      }
    };

    verifySession();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/register" element={
        <RoleProtectedRoute allowedRoles={["Admin"]}>
          <Register />
        </RoleProtectedRoute>
      } />
    </Routes>

  );
}

export default App;
