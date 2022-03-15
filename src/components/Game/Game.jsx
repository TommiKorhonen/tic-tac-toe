import React, { useState } from "react";
import Board from "../Board/Board";

const Game = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setValue("X");
  };
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <Board onClick={handleClick} value={value} />
    </div>
  );
};

export default Game;
