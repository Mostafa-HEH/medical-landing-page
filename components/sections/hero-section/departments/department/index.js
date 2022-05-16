import classes from "./styles.module.css";

const Department = ({ icon, name }) => {
  return (
    <li className={classes.department}>
      <div className={classes.departmenticon}>{icon}</div>
      <h4 className={classes.departmentname}>{name}</h4>
    </li>
  );
};

export default Department;
