import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const FeatureReviews = () => {
  const [reviews, setReviews] = useState(undefined);
  const [feature, setFeature] = useState(undefined);

  const { query } = useRouter();

  useEffect(() => {
    setReviews(query.reviewesid);
    setFeature(query.featureid);
  }, [query]);

  if (reviews) {
    return (
      <div>
        <h1>
          This features reviews page for feature &quot;{feature}&quot;
          <br />
          Used this users wich have id &quot;{reviews}&quot;
        </h1>
        This page isn&apos;t completed because of &quot;this it just for
        practice project&quot;
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default FeatureReviews;
