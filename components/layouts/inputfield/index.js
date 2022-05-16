import classes from "./styles.module.css";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classes.outlinedField}
    />
  );
};

export default InputField;
