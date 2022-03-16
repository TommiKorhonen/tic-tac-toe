import Square from "../Square/Square";

const Board = ({ squares, handleClick, reset }) => {
  return (
    <div className="flex flex-col" onClick={() => reset()}>
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
    </div>
  );
};

export default Board;
