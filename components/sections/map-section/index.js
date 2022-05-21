import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import classes from "./styles.module.css";

const MapSection = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAtZGc5hvVnS1b37JW58myBu2LYCi6t25s",
  });

  if (!isLoaded) return <div className={classes.loading}>Loading...</div>;
  return (
    <section className={classes.container}>
      <Map />
    </section>
  );
};

const Map = () => {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={classes.mapcontainer}
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
};

export default MapSection;
