import classes from "./styles.module.css";

const Wrapper = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
