import Wrapper from "../../layouts/wrapper";
import Departments from "./departments";
import InputField from "../../layouts/inputfield";
import Button from "../../layouts/button";

import classes from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <section className={classes.container}>
      <Wrapper>
        <div className={classes.content}>
          <h2 className={classes.title}>We made your medical treatment easy</h2>
          <p className={classes.subtitle}>
            Lorem ipsum dolor sit amet consec tetur elit amet voluptas accusamus
            dolorum veritatis ea odio dolor emque.
          </p>
          <Departments />
        </div>
        <form className={classes.appointment}>
          <h4 className={classes.formtitle}>
            Sydney's #1 Medical Treatment Service Center.
          </h4>
          <InputField type="text" placeholder="First Name" />
          <InputField type="text" placeholder="Last Name" />
          <InputField type="email" placeholder="Email" />
          <InputField type="number" placeholder="Phone" />
          <InputField type="text" placeholder="Website" />
          <Button type="submit">make an appointment</Button>
        </form>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
