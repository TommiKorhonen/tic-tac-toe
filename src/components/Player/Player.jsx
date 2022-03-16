import React, { useEffect } from "react";

const Player = ({ name, score, xO, winner, setPlayerScore }) => {
  useEffect(() => {
    if (winner === xO) {
      setPlayerScore(score + 1);
    }
  }, [winner]);
  return (
    <div className="flex text-2xl flex-col text-white font-semibold">
      <div className="flex gap-1">
        <h3>{name}</h3>
        <p>({xO})</p>
      </div>
      <div className="text-center">
        <p data-testid="playerScore">{score}</p>
      </div>
    </div>
  );
};

export default Player;
