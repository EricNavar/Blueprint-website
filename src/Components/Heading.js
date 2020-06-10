import React, { Fragment, useState, useEffect } from "react";
import { ReactComponent as HeaderName } from "../svgs/1. Header/Header_Name.svg";
import HeaderNav from "./HeaderNav";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/Heading.css";

function Heading() {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 3000);
  });

  return (
    <Fragment>
      <section className={rendered ? "name lowstroke" : "name"}>
        <DrawSVG duration="5000" delay="1000">
          <HeaderName />
        </DrawSVG>
      </section>
      <HeaderNav />
    </Fragment>
  );
}

export default Heading;
