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

const Login = () => {
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
      console.log("response: ", response);
      if (response && response.token) {
        dispatch(credential(response.token));
        navigate("/");
      }
    } catch (err) {
      console.error("Error en el login:", err);
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
            <h1>Iniciar Sesion</h1>

            <div className="input-box">
              <InputBase
                label="email"
                name="email"
                type="text"
                placeholder="Email"
                icon={FaAt}
              />
            </div>

            <div className="input-box">
              <InputBase
                label="password"
                name="password"
                type="password"
                placeholder="password"
                icon={FaLock}
              />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox"></input> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button disabled={isSubmitting} type="submit" className="submit">
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
