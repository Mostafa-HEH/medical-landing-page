import Wrapper from "../../layouts/wrapper";

import classes from "./styles.module.css";

const DividerSection = () => {
  return (
    <section className={classes.container}>
      <Wrapper>
        <h3>Honesty is the best policy.</h3>
        <p>
          We communicate honestly. No hidden fees, no surprises, no upsells!
          Only honest work and trustworthy staff.
        </p>
      </Wrapper>
    </section>
  );
};

export default DividerSection;
