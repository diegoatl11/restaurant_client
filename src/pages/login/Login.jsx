import React from "react";
import "../../styles/login/login.css";
import { useNavigate } from "react-router-dom";
import { FaLock, FaAt } from "react-icons/fa";
import { Formik, Form } from "formik";
import { loginSchema } from "../../schemas/shemas.js";
import InputBase from "../../components/formik/InputBase.jsx";
import useAccessLogin from "../../hooks/accessLogin.js";
import { useDispatch } from "react-redux";
import { credential } from "../../store/features/authSlice.js";
import { useState } from "react";
import ModalError from "../../components/modals/modalError.jsx";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAccessLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, actions) => {
    try {
      const response = await login(values);
      console.log("response: ", JSON.stringify(response, null, 2));

      if (response) {
        dispatch(
          credential({
            userId: response.userId,
            username: response.username,
            roles: response.roles,
          })
        );
        navigate("/");
      } else {
        setErrorMessage(response.message);
        setModalOpen(true);
      }
    } catch (err) {
      console.error("Error en el login:", err);
      setErrorMessage("Error en el login. Verifica tus credenciales.");
      setModalOpen(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <div className="wrapper">
          <Form>
            <h1>Otra Cosita</h1>

            <div className="input-box">
              <InputBase
                label="email"
                name="email"
                type="text"
                placeholder="Correo electronico"
                icon={FaAt}
              />
            </div>

            <div className="input-box">
              <InputBase
                label="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                icon={FaLock}
              />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox"></input> Recuerdame
              </label>
            </div>

            <button disabled={isSubmitting} type="submit" className="submit">
              Iniciar Sesíon
            </button>

            <div className="register-link">
              <a href="#">Olvidaste tu contraseña?</a>
            </div>

            <div>
              <ModalError
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                message={errorMessage}
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
