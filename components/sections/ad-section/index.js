import Wrapper from "../../layouts/wrapper";
import Button from "../../layouts/button";

import classes from "./styles.module.css";

const AdSection = () => {
  return (
    <section className={classes.container}>
      <Wrapper>
        <p className={classes.text}>
          Over 300+ peoples are daily visit our medical center.
        </p>
        <Button>Learn More</Button>
      </Wrapper>
    </section>
  );
};

export default AdSection;
