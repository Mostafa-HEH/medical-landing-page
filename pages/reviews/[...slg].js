import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Review = () => {
  const [displayReviews, setDisplayReviews] = useState(undefined);
  const { query } = useRouter();

  useEffect(() => {
    setDisplayReviews(query.slg);
  }, [query]);

  if (displayReviews) {
    return (
      <div>
        <h1>This is {displayReviews[0]} reviews</h1>
        This page isn't completed because of "this it just for practice project"
        <br />
        <Link href="/reviews/2021/1">Get 2021 Reviews</Link>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Review;
