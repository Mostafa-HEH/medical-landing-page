import classes from "./styles.module.css";

const Counter = ({ icon, number, name }) => {
  return (
    <li className={classes.container}>
      <div>{icon}</div>
      <div className={classes.number}>{number}</div>
      <div className={classes.name}>{name}</div>
    </li>
  );
};

export default Counter;
