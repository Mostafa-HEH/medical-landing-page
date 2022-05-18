import classes from "./styles.module.css";

const SectionsTitle = ({ subtitle, title }) => {
  return (
    <div className={classes.container}>
      <h4 className={classes.subtitle}> - {subtitle} - </h4>
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
};

export default SectionsTitle;
