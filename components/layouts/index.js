import { Fragment } from "react";

import Header from "./header";
import Footer from "./footer";

const Layouts = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layouts;
