import { useField } from "formik";
import "../../styles/formik/inputBase.css";

const CustomInput = ({ label, icon: Icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-container">
      {Icon && <Icon className="input-icon" />}
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
export default CustomInput;
