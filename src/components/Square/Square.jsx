import React, { useState } from "react";
import { BeakerIcon } from "@heroicons/react/solid";
const Square = ({ value, handleClick, row, col, isClicked }) => {
  return (
    <div
      onClick={() => handleClick(row, col)}
      className="border border-white
                w-[100px] h-[100px] 
                cursor-pointer
                flex items-center justify-center"
    >
      <div role="gridcell" className="font-bold text-4xl text-white">
        {value}
      </div>
    </div>
  );
};

export default Square;
