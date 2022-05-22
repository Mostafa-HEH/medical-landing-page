import classes from "./styles.module.css";

const Contact = ({ name, contact }) => {
  return (
    <div className={classes.container}>
      <div className={classes.name}>{name}</div>
      <div className={classes.contact}>{contact}</div>
    </div>
  );
};

export default Contact;
