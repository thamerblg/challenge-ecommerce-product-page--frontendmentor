import React from "react";
import Gallery from "./Gallery";
import Description from "./Description";

const Main = ({ handleAddToCart }) => {
  return (
    <div className="md:px-12 px-0 md:py-20 pt-0 pb-20 max-w-[1150px] mx-auto flex flex-col md:grid md:grid-cols-2 md:items-center xl:gap-28 gap-6">
      <Gallery />
      <Description handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Main;
