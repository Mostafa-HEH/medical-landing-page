import classes from "./styles.module.css";

const Button = ({ children, type }) => {
  return (
    <button className={classes.button} type={type ? type : null}>
      {children}
    </button>
  );
};

export default Button;
