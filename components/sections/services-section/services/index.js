import Service from "./service";

import RoboticIcon from "../../../icons/robotic";
import AmbulanceWithCircleIcon from "../../../icons/ambulance-with-circle-icon";
import Cancer from "../../../icons/cancer";
import EmergencyIcon from "../../../icons/emergency";
import WellnessIcon from "../../../icons/Wellness";
import OrthopaedicIcon from "../../../icons/orthopaedic";
import BarinIcon from "../../../icons/barin";
import HeartIcon from "../../../icons/heart";

import classes from "./styles.module.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: <RoboticIcon />,
      name: "Robotic Surgery",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 2,
      icon: <AmbulanceWithCircleIcon />,
      name: "Ambulance Service",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 3,
      icon: <Cancer />,
      name: "Cancer Services",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 4,
      icon: <EmergencyIcon />,
      name: "Emergency Services",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 5,
      icon: <WellnessIcon />,
      name: "Wellness Center",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 6,
      icon: <OrthopaedicIcon />,
      name: "Orthopaedic & Spine Institute",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 7,
      icon: <BarinIcon />,
      name: "Barin Checkup",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
    {
      id: 8,
      icon: <HeartIcon />,
      name: "Heart Care Services",
      description:
        "Lorem ipsum dolor sit amet elit convallis neque convallis est non turpis nisl ac justo rutrum sollic itudin urna interdum.",
    },
  ];

  return (
    <ul className={classes.container}>
      {servicesData.map(({ id, icon, name, description }) => (
        <Service key={id} icon={icon} name={name} description={description} />
      ))}
    </ul>
  );
};

export default Services;
