import Wrapper from "../../layouts/wrapper";
import SectionsTitle from "../../layouts/section-title";
import Services from "./services";

import classes from "./styles.module.css";

const ServicesSection = () => {
  return (
    <section className={classes.container}>
      <Wrapper>
        <SectionsTitle subtitle="SERVICES" title="Our Medical Service " />
        <p className={classes.sectiondescription}>
          We're different from typical health checkup center. We're out to
          create magic. The goal is to WOW you with outstanding treatment.
        </p>
        <Services />
      </Wrapper>
    </section>
  );
};

export default ServicesSection;
