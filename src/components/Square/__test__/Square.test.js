import { render, screen } from "@testing-library/react";
import Square from "../Square";

const squareProps = {
  value: "X",
  row: 0,
  col: 0,
  handleClick: () => {},
};

describe("square", () => {
  test("should be empty initally", () => {
    render(<Square />);
    expect(screen.getByRole("gridcell")).toBeEmptyDOMElement();
  });
  test("should show node value", () => {
    render(<Square {...squareProps} />);
    expect(screen.getByText(/x/i)).toBeInTheDocument();
  });
});
