import Counter from "./counter";
import Wrapper from "../../layouts/wrapper";

import ClientsIcon from "../../icons/clients";
import ProffesionalIcon from "../../icons/proffesional";
import AmbulanceOutlinedIcon from "../../icons/ambulance-outlined";
import RoomsIcon from "../../icons/Rooms";

import classes from "./styles.module.css";

const CounterSection = () => {
  const countersData = [
    { id: 1, number: 5500, name: "Healthy Clients", icon: <ClientsIcon /> },
    {
      id: 2,
      number: 85,
      name: "Proffesional Doctors",
      icon: <ProffesionalIcon />,
    },
    { id: 3, number: 30, name: "Ambulance", icon: <AmbulanceOutlinedIcon /> },
    { id: 4, number: 200, name: "ROOMS", icon: <RoomsIcon /> },
  ];

  return (
    <section className={classes.container}>
      <Wrapper>
        <ul className={classes.counters}>
          {countersData.map(({ id, number, name, icon }) => (
            <Counter key={id} number={number} name={name} icon={icon} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default CounterSection;
