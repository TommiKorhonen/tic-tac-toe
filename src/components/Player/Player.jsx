import React from "react";

const Player = ({ name, score, xO }) => {
  return (
    <div className="flex flex-col text-white font-semibold">
      <div className="flex gap-1">
        <h3>{name}</h3>
        <p>({xO})</p>
      </div>
      <div className="text-center">
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Player;
