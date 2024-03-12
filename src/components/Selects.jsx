import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3  max-w-[1240px] mx-auto gap-4 px-4 py-16">
      <SelectsCard bg={borabora} text="Bora Bora" />
      <SelectsCard bg={borabora2} text="Cozumel" />
      <SelectsCard bg={keywest} text="Maldives" />
      <SelectsCard bg={maldives} text="Jamaica" />
      <SelectsCard bg={maldives2} text="Key West" />
      <SelectsCard bg={maldives3} text="Antigua" />
    </div>
  );
};

export default Selects;
