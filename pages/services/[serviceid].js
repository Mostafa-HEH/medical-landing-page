import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ServiceReview = () => {
  const [service, setService] = useState(undefined);

  const { query } = useRouter();

  useEffect(() => {
    setService(query.serviceid);
  }, [query]);

  return (
    <div>
      <h1>This services review page for {service ? service : "Loading..."}</h1>
      This page isn&apos;t completed because of &quot;this it just for practice
      project&quot;
    </div>
  );
};

export default ServiceReview;
