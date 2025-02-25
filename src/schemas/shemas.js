import * as yup from "yup";

const validationLogin = {
    email:
        /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
    password: /^(?=.*[a-z]).{5,}$/,
    userName: /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/,
    firstName: /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/,
    lastName: /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/,
    confirmPassword: /^(?=.*[A-Z])(?=.*).{5,}$/,
    phone: /^\d{1,9}$/,
    dni: /^\d{1,8}$/,
};

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .matches(validationLogin.email, { message: "Ingrese un email valido" })
        .required("Ingrese su email"),
    password: yup
        .string()
        .matches(validationLogin.password, {
            message: "Ingresa una contraseña valida",
        })
        .required("Ingrese su Contraseña"),
});


export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .matches(validationLogin.email, { message: "Ingrese un email valido" })
        .required("Ingrese su email"),
    userName: yup
        .string()
        .matches(validationLogin.userName, { message: "Ingrese un nombre de usuario Correcto" })
        .required("Ingrese su nombre de usuario"),
    firstName: yup
        .string()
        .matches(validationLogin.firstName, { message: "Ingrese un nombre valido" })
        .required("Ingrese su Nombre"),
    lastName: yup
        .string()
        .matches(validationLogin.lastName, { message: "Ingrese un apellido valido" })
        .required("Ingrese su Apellido"),
    password: yup
        .string()
        .matches(validationLogin.password, {
            message: "Ingresa una contraseña valida",
        })
        .required("Ingrese su Contraseña"),
    confirmPassword: yup
        .string()
        .matches(validationLogin.confirmPassword, {
            message: "Ingresa una contraseña valida",
        })
        .required("Ingrese su Contraseña"),
    phone: yup
        .string()
        .matches(validationLogin.phone, { message: "Numero Maximo de digitos 9" })
        .required("Ingrese su numero telefonico"),
    dni: yup
        .string()
        .matches(validationLogin.dni, { message: "Numero Maximo de digitos 8" })
        .required("Ingrese su numero de documento"),

});