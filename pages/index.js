import { Fragment } from "react";

import Link from "next/link";

import HeroSection from "../components/sections/hero-section";
import CounterSection from "../components/sections/counter-section";
import FeatursSection from "../components/sections/featurs-section";
import DividerSection from "../components/sections/divider-section";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <CounterSection />
      <FeatursSection />
      <DividerSection />
    </Fragment>
  );
};

export default HomePage;
