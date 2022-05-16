import Department from "./department";

import Laboratory from "../../../icons/laboratory";
import XRay from "../../../icons/x-ray";
import Ambulance from "../../../icons/ambulance";
import Ward from "../../../icons/ward";

import classes from "./styles.module.css";

const Departments = () => {
  const departmentsData = [
    { id: 1, name: "Laboratory services", icon: <Laboratory /> },
    { id: 2, name: "Radiology and X-ray facility", icon: <XRay /> },
    { id: 3, name: "Ambulance Services", icon: <Ambulance /> },
    { id: 4, name: "Ward / Indoor facility", icon: <Ward /> },
  ];

  return (
    <ul className={classes.departments}>
      {departmentsData.map(({ id, name, icon }) => (
        <Department key={id} icon={icon} name={name} />
      ))}
    </ul>
  );
};

export default Departments;
