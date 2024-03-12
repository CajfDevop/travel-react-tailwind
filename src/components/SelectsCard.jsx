import React from "react";

const SelectsCard = (props) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <img className= "w-full h-full object-cover" src={props.bg} alt="/" />
      <p className=" absolute bottom-4 left-4 font-bold text-white text-lg">
        {props.text}
      </p>
    </div>
  );
};

export default SelectsCard;
