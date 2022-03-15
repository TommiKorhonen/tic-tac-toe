export const checkForWinner = (grid, setWinner) => {
  const newGrid = grid;
  let combos = [
    [newGrid[0][0], newGrid[0][1], newGrid[0][2]],
    [newGrid[1][0], newGrid[1][1], newGrid[1][2]],
    [newGrid[2][0], newGrid[2][1], newGrid[2][2]],
    [newGrid[0][0], newGrid[1][0], newGrid[2][0]],
    [newGrid[0][1], newGrid[1][1], newGrid[2][1]],
    [newGrid[0][2], newGrid[1][2], newGrid[2][2]],
    [newGrid[0][0], newGrid[1][1], newGrid[2][2]],
    [newGrid[0][2], newGrid[1][1], newGrid[2][0]],
  ];

  for (let combo in combos) {
    const [a, b, c] = combos[combo];
    if (a.value && a.value === b.value && a.value === c.value) {
      return setWinner(a.value);
    }
  }
  return null;
};
