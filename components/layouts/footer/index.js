import Links from "./links";
import Copyrights from "./copyrights";

import classes from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <Links />
      <Copyrights />
    </footer>
  );
};

export default Footer;
