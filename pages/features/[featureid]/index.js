import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const FeatureOverview = () => {
  const [feature, setFeature] = useState(undefined);
  const { query } = useRouter();

  useEffect(() => setFeature(query.featureid), [query]);

  if (feature) {
    return (
      <div>
        <h1>This feature overview page for {feature}</h1>
        This page isn't completed because of "this it just for practice project"
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default FeatureOverview;
