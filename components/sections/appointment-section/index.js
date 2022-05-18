import Wrapper from "../../layouts/wrapper";
import Button from "../../layouts/button";

import classes from "./styles.module.css";

const Appointment = () => {
  return (
    <section className={classes.container}>
      <Wrapper>
        <h3 className={classes.head}>
          Hurry up! and get
          <br />
          {<span className={classes.spcial}>Free</span>} treatment for first 50
          person
        </h3>
        <p className={classes.description}>
          Limited time offer for this month. No credit card required.
        </p>
        <Button>Make an Appointment</Button>
      </Wrapper>
    </section>
  );
};

export default Appointment;
