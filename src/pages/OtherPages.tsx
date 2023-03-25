import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const OtherPages = () => {
  const location = useLocation();

  return (
    <div>
      Pages {location.pathname}
      {/* {props.title} */}
    </div>
  );
};

export default OtherPages;
