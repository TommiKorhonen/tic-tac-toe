import React from "react";

const Square = ({ value, handleClick, row, col }) => {
  return (
    <article
      onClick={() => handleClick(row, col)}
      className="border border-white
                w-[200px] h-[200px] 
                cursor-pointer
                flex items-center justify-center
                "
    >
      <div role="gridcell" className="font-bold text-8xl text-white">
        {value}
      </div>
    </article>
  );
};

export default Square;
