import { render, screen } from "@testing-library/react";
import Player from "../Player";

const playerProps = {
  name: "Player 1",
  score: "1",
  xO: "X",
  winner: "X",
  setPlayerScore: () => {},
};

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Player {...playerProps} />);
});

describe("Player", () => {
  test("should show player name", () => {
    expect(screen.getByText(/player 1/i)).toBeInTheDocument();
  });
  test("should show player value(X/O)", () => {
    expect(screen.getByText(/x/i)).toBeInTheDocument();
  });
  test("should show player score", () => {
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
