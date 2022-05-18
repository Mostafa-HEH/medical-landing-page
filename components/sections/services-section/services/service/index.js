import classes from "./styles.module.css";

const Service = ({ icon, name, description }) => {
  return (
    <li className={classes.container}>
      <div>{icon}</div>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.description}>{description}</p>
    </li>
  );
};

export default Service;
