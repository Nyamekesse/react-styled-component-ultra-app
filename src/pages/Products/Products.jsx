import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
