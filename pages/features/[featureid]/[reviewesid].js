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
          This features reviews page for feature "{feature}"
          <br />
          Used this users wich have id "{reviews}"
        </h1>
        This page isn't completed because of "this it just for practice project"
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default FeatureReviews;
