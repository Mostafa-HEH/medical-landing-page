import SectionsTitle from "../../layouts/section-title";
import Wrapper from "../../layouts/wrapper";
import Feature from "./feature";

import classes from "./styles.module.css";

const FeatursSection = () => {
  const FeatursData = [
    {
      id: 1,
      name: "The Perfect Template for Medical.",
      provieds: [
        "Nunc quis justo sed odio scelerisque.",
        "Duis tristique lorem non risus dignissim.",
        "Vivamus accumsan sem sit amet.",
        "Morbi sed orci a tortor bibendum finibus.",
        "Nam sed sem quis nisi faucibus tempor.",
        "Vivamus accumsan sem sit amet.",
      ],
      image: "/images/template-for-medical.jpg",
    },
    {
      id: 2,
      name: "Watch youtube video and get details of our center.",
      provieds: [
        "Nunc quis justo sed odio scelerisque.",
        "Duis tristique lorem non risus dignissim.",
        "Vivamus accumsan sem sit amet.",
        "Morbi sed orci a tortor bibendum finibus.",
        "Nam sed sem quis nisi faucibus tempor.",
        "Vivamus accumsan sem sit amet.",
      ],
      image: "/images/get-details.jpg",
    },
  ];

  return (
    <section className={classes.container}>
      <Wrapper>
        <SectionsTitle
          subtitle="FEATURES"
          title="Check out some of our professional features!"
        />
        <div className={classes.featurscontainer}>
          {FeatursData.map(({ id, name, provieds, image }) => (
            <Feature key={id} name={name} provieds={provieds} image={image} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default FeatursSection;
