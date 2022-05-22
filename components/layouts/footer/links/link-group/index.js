import classes from "./styles.module.css";

const LinkGroup = ({ head, links, other }) => {
  return (
    <div className={classes.container}>
      <h6 className={classes.head}>{head}</h6>
      {links ? (
        <ul className={classes.list}>
          {links.map(({ id, name, route, isIcon }) => (
            <li key={id} className={isIcon ? classes.inlineicons : null}>
              <a href={route}>{isIcon ? name() : name}</a>
            </li>
          ))}
        </ul>
      ) : null}
      {other ? <div className={classes.other}>{other}</div> : null}
    </div>
  );
};

export default LinkGroup;
