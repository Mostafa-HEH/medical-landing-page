import { Fragment } from "react";

import Header from "./header";

const Layouts = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main style={{ backgroundColor: "#cccccc", height: "100vh" }}>
        {children}
      </main>
    </Fragment>
  );
};

export default Layouts;
