import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour } from "./Data";

const Service = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Service;
