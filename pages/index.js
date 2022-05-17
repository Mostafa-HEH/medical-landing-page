import { Fragment } from "react";

import Link from "next/link";

import HeroSection from "../components/sections/hero-section";
import CounterSection from "../components/sections/counter-section";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <CounterSection />
    </Fragment>
  );
};

export default HomePage;
