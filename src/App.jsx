import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/login/Register.jsx";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./services/getUserInfo.js";
import { credential, logout } from "./store/features/authSlice.js";
import "./styles/App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const verifySession = async () => {
      try {
        console.log("entro aqui");
        const response = await getUserInfo();
        console.log("response: ", JSON.stringify(response, null, 2));

        if (response.status === 200) {
          dispatch(
            credential({
              userId: response.data.userId,
              username: response.data.username,
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
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
