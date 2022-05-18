import { Fragment } from "react";

import Link from "next/link";

import HeroSection from "../components/sections/hero-section";
import CounterSection from "../components/sections/counter-section";
import FeatursSection from "../components/sections/featurs-section";
import DividerSection from "../components/sections/divider-section";
import ServicesSection from "../components/sections/services-section";
import ReviewsSection from "../components/sections/reviews-section";
import AdSection from "../components/sections/ad-section";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <CounterSection />
      <FeatursSection />
      <DividerSection />
      <ServicesSection />
      <ReviewsSection />
      <AdSection />
    </Fragment>
  );
};

export default HomePage;
