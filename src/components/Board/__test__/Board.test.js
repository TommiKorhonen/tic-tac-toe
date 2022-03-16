import { render, screen } from "@testing-library/react";
import Board from "../Board";

const squares = {
  grid: [
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
    [{ col: 0, row: 0, value: "", isClicked: false }],
  ],
};

describe("Board", () => {
  test("should render 9 squares", () => {
    render(<Board squares={squares} />);
    expect(screen.getAllByRole("article").length).toBe(9);
  });
});
