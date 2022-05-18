import classes from "./styles.module.css";

const Comment = ({ icon, comment, name, job, active }) => {
  return (
    <div
      className={`${classes.container} ${
        active ? classes.containeractive : null
      }`}
    >
      <div>{icon}</div>
      <p className={classes.comment}>{comment}</p>
      <h6 className={classes.name}>
        {name} {job ? ` - ${job}` : null}
      </h6>
    </div>
  );
};

export default Comment;
