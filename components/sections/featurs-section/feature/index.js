import Image from "next/image";

import Button from "../../../layouts/button";

import CheckedIcon from "../../../icons/checked";

import classes from "./styles.module.css";

const Feature = ({ name, provieds, image }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imagecontainer}>
        <Image src={image} alt={name} />
      </div>
      <div className={classes.contentcontainer}>
        <h4 className={classes.name}>{name}</h4>
        <ul className={classes.listfeaturs}>
          {provieds.map((item, id) => (
            <li key={id}>
              <span>
                <CheckedIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default Feature;
