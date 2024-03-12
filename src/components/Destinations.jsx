import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";

const Destinations = () => {
  return (
    <div className="text-center py-16 px-4 max-w-[1240px] mx-auto">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 md:gap-4 grid-cols-2 gap-2 py-2">
        <img
          className=" w-full h-full object-cover md:col-span-3 col-span-2 row-span-2"
          src={borabora}
          alt="/"
        />
        <img className=" w-full h-full object-cover " src={borabora2} alt="/" />
        <img className=" w-full h-full object-cover " src={keywest} alt="/" />
        <img className=" w-full h-full object-cover " src={maldives2} alt="/" />
        <img className=" w-full h-full object-cover " src={maldives3} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
