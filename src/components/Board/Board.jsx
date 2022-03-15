import React, { useEffect, useState } from "react";
import Square from "../Square/Square";
import Player from "../Player/Player";
import { checkForWinner } from "../../checkWinner/checkWinner";

const Board = () => {
  const [squares, setSquares] = useState({
    grid: [],
  });
  const [xIsNext, setXisNext] = useState(true);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState();
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
    if (winner) {
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

  //   Creates a node
  const createNode = (col, row) => {
    return {
      col,
      row,
      value: "",
      isClicked: false,
    };
  };
  // Changes grid node value
  const handleClick = (row, col) => {
    if (squares.grid[row][col].isClicked === true) {
      return "";
    }
    if (winner) {
      return "";
    }
    const newValue = getNewGridWithValueToggled(squares.grid, row, col);
    setXisNext(!xIsNext);
    checkForWinner(squares.grid, setWinner);
    setSquares({ grid: newValue });
  };
  //    Returns new grid with node value changed
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
  useEffect(() => {
    if (winner === "X") {
      setPlayer1Score(player1Score + 1);
    } else if (winner === "O") {
      setPlayer2Score(player2Score + 1);
    }
  }, [winner]);

  return (
    <div className="flex flex-col" onClick={() => reset()}>
      <h2 className="text-white text-2xl font-semibold">Winner: {winner}</h2>
      {squares.grid.map((row, rowindex) => {
        return (
          <div key={rowindex} className="flex">
            {row.map((node, nodeIndex) => {
              const { row, col, isClicked, value } = node;
              return (
                <Square
                  isClicked={isClicked}
                  asf={isClicked}
                  squares={squares}
                  col={col}
                  row={row}
                  key={nodeIndex}
                  value={value}
                  index={nodeIndex}
                  rowindex={rowindex}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        );
      })}
      <div className="flex items-center justify-center gap-36">
        <Player name={player1.name} score={player1Score} xO={player1.xO} />
        <Player name={player2.name} score={player2Score} xO={player2.xO} />
      </div>
    </div>
  );
};

export default Board;
