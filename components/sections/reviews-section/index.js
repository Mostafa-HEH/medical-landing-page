import { useState } from "react";
import Wrapper from "../../layouts/wrapper";
import SectionsTitle from "../../layouts/section-title";
import Comment from "./comment";

import CommentIcon from "../../icons/comment";

import classes from "./styles.module.css";

const ReviewsSection = () => {
  const [active, setActive] = useState(1);
  const commentsData = [
    {
      id: 1,
      icon: <CommentIcon />,
      comment:
        "From the telephone appointment system to seeing a GP, my experience has been flawless. All the team from reception, telephone and nursing staff are polite, thorough and cheerful, which in itself is comforting.",
      name: "Mark Dave",
      job: "Teacher",
    },
    {
      id: 2,
      icon: <CommentIcon />,
      comment:
        "From Mostafa Hassan the telephone appointment system to seeing a GP, my experience has been flawless. All the team from reception, telephone and nursing staff are polite, thorough and cheerful, which in itself is comforting.",
      name: "Mostafa Hassan",
      job: "Fron-End Developer",
    },
    {
      id: 3,
      icon: <CommentIcon />,
      comment:
        "From Mohammed Hassan the telephone appointment system to seeing a GP, my experience has been flawless. All the team from reception, telephone and nursing staff are polite, thorough and cheerful, which in itself is comforting.",
      name: "Mohammed Hassan",
      job: null,
    },
  ];
  return (
    <section className={classes.container}>
      <Wrapper>
        <SectionsTitle
          subtitle="REVIEWS"
          title="Read what our past patients said about our medical center."
        />
        {commentsData.map(({ id, icon, comment, name, job }) => (
          <Comment
            key={id}
            icon={icon}
            comment={comment}
            name={name}
            job={job}
            active={id === active ? true : false}
          />
        ))}
      </Wrapper>
      <div className={classes.dotts}>
        <span
          className={`${classes.dot} ${
            active === 1 ? classes.dotactive : null
          }`}
          onClick={() => setActive(1)}
        ></span>
        <span
          className={`${classes.dot} ${
            active === 2 ? classes.dotactive : null
          }`}
          onClick={() => setActive(2)}
        ></span>
        <span
          className={`${classes.dot} ${
            active === 3 ? classes.dotactive : null
          }`}
          onClick={() => setActive(3)}
        ></span>
      </div>
    </section>
  );
};

export default ReviewsSection;
