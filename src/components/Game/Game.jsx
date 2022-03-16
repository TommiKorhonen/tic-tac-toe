import React, { useEffect, useState } from "react";
import { checkForWinner } from "../../checkWinner/checkWinner";
import Board from "../Board/Board";
import Player from "../Player/Player";

const Game = () => {
  const [squares, setSquares] = useState({
    grid: [],
  });
  const [xIsNext, setXisNext] = useState(true);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState();
  const [isClickedTotal, setIsClickedTotal] = useState(0);

  class User {
    constructor(name, xO, score) {
      this.name = name;
      this.xO = xO;
      this.score = score;
    }
  }
  const player1 = new User("Player 1", "X", player1Score);
  const player2 = new User("Player 2", "O", player2Score);
  const reset = () => {
    if (winner || isClickedTotal === 9) {
      setIsClickedTotal(0);
      squareGenerator();
      setWinner();
      setXisNext(true);
    } else {
      return "";
    }
  };

  // Generates 3x3 grid
  const squareGenerator = () => {
    const grid = [];
    for (let row = 0; row < 3; row++) {
      const currentRow = [];
      for (let col = 0; col < 3; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    setSquares({ grid });
  };

  const createNode = (col, row) => {
    return {
      col,
      row,
      value: "",
      isClicked: false,
    };
  };

  const handleClick = (row, col) => {
    if (squares.grid[row][col].isClicked === true) {
      return "";
    }
    if (winner) {
      return "";
    }
    setIsClickedTotal(isClickedTotal + 1);
    const newValue = getNewGridWithValueToggled(squares.grid, row, col);
    setXisNext(!xIsNext);
    checkForWinner(squares.grid, setWinner);
    setSquares({ grid: newValue });
  };
  // Renders new grid with changed node value
  const getNewGridWithValueToggled = (grid, row, col) => {
    const newGrid = [...grid];
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isClicked: true,
      value: xIsNext ? player1.xO : player2.xO,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };
  useEffect(() => {
    squareGenerator();
  }, []);
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <div>
        <h2 className="text-white text-2xl font-semibold">Winner: {winner}</h2>
        <Board squares={squares} handleClick={handleClick} reset={reset} />
        <div className="flex items-center justify-center gap-36">
          <Player
            winner={winner}
            setPlayerScore={setPlayer1Score}
            name={player1.name}
            score={player1Score}
            xO={player1.xO}
          />
          <Player
            winner={winner}
            setPlayerScore={setPlayer2Score}
            name={player2.name}
            score={player2Score}
            xO={player2.xO}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
