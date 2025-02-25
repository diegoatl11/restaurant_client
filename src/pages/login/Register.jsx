import React from "react";
import { Formik, Form } from "formik";
import { registerSchema } from "../../schemas/shemas.js";
import "../../styles/login/register.css";
import InputBase from "../../components/formik/InputBase.jsx";
import { FaUser, FaLock, FaAt, FaPhone } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

let initialValuesFormik = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
};

const Register = () => {
  return (
    <Formik
      initialValues={initialValuesFormik}
      validationSchema={registerSchema}
    >
      {({ isSubmitting }) => (
        <div className="wrapper-register">
          <Form>
            <h1>Registro</h1>

            <div className="form-grid-register">
              <div className="column-register">
                <div className="input-register">
                  <a>Email</a>
                  <InputBase
                    label="email"
                    name="email"
                    type="text"
                    icon={FaAt}
                  />
                </div>

                <div className="input-register">
                  <a>Contraseña</a>
                  <InputBase
                    label="password"
                    name="password"
                    type="password"
                    icon={FaLock}
                  />
                </div>

                <div className="input-register">
                  <a>Nombre</a>
                  <InputBase
                    label="firstName"
                    name="firstName"
                    type="text"
                    icon={FaUser}
                  />
                </div>

                <div className="input-register">
                  <a>Teléfono</a>
                  <InputBase
                    label="phone"
                    name="phone"
                    type="text"
                    icon={FaPhone}
                  />
                </div>

                <div className="input-register">
                  <a>Número de Documento</a>
                  <InputBase
                    label="dni"
                    name="dni"
                    type="text"
                    icon={MdContactEmergency}
                  />
                </div>
              </div>
              <div className="column">
                <div className="input-register">
                  <a>Nombre de Usuario</a>
                  <InputBase
                    label="userName"
                    name="userName"
                    type="text"
                    icon={IoMdContact}
                  />
                </div>

                <div className="input-register">
                  <a>Confirmar Contraseña</a>
                  <InputBase
                    label="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    icon={FaLock}
                  />
                </div>

                <div className="input-register">
                  <a>Apellido</a>
                  <InputBase
                    label="lastName"
                    name="lastName"
                    type="text"
                    icon={FaUser}
                  />
                </div>
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="submit">
              Registar
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Register;
