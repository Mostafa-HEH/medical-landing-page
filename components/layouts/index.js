import { Fragment } from "react";

import Header from "./header";

const Layouts = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layouts;
