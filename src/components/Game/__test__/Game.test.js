import { render, screen, within } from "@testing-library/react";
import Game from "../Game.jsx";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Game />);
});

const handleClick = (articlesIndex) => {
  const cellArticles = screen.getAllByRole("article");
  const cellElements = screen.getAllByRole("gridcell");
  userEvent.click(cellArticles[articlesIndex]);

  return {
    cellArticles,
    cellElements,
  };
};

describe("Game", () => {
  test("should be able to set cell value to X", () => {
    const { cellElements } = handleClick(0);
    expect(cellElements[0]).toHaveTextContent("X");
  });

  test("should be able to set cell value to O after X", () => {
    const { cellElements, cellArticles } = handleClick(0);
    handleClick(1);
    expect(cellElements[1]).toHaveTextContent("O");
  });

  test("should not be able to change cell value if it has value already", () => {
    const { cellElements, cellArticles } = handleClick(0);
    handleClick(0);
    expect(cellElements[0]).toHaveTextContent("X");
  });

  test("should be able to reset game if tie", () => {
    const { cellElements, cellArticles } = handleClick(0);
    handleClick(3);
    handleClick(1);
    handleClick(4);
    handleClick(5);
    handleClick(2);
    handleClick(6);
    handleClick(7);
    handleClick(8);
    handleClick(0);
    expect(cellElements[0]).toHaveTextContent("");
  });

  test("should give winner if three same values in row", () => {
    const { cellElements, cellArticles } = handleClick(0);
    handleClick(3);
    handleClick(1);
    handleClick(4);
    handleClick(2);

    expect(cellElements[0]).toHaveTextContent("X");
    expect(cellElements[1]).toHaveTextContent("X");
    expect(cellElements[2]).toHaveTextContent("X");

    expect(
      screen.getByRole("heading", {
        name: /winner/i,
      })
    ).toHaveTextContent(/x/i);
  });

  test("should add point to correct player after winning", () => {
    const { cellElements, cellArticles } = handleClick(0);
    const player1Heading = screen.getAllByTestId("playerScore");

    expect(player1Heading[0]).toHaveTextContent(0);

    handleClick(3);
    handleClick(1);
    handleClick(4);
    handleClick(2);

    expect(cellElements[0]).toHaveTextContent("X");
    expect(cellElements[1]).toHaveTextContent("X");
    expect(cellElements[2]).toHaveTextContent("X");
    expect(player1Heading[0]).toHaveTextContent(1);
  });

  test("should be able to reset game after winner is decleared", () => {
    const { cellElements, cellArticles } = handleClick(0);
    handleClick(3);
    handleClick(1);
    handleClick(4);
    handleClick(2);
    const winnerHeading = screen.getByRole("heading", {
      name: /winner/i,
    });
    expect(winnerHeading).toHaveTextContent(/x/i);
    handleClick(0);
    expect(winnerHeading).toHaveTextContent("Winner:");
    expect(cellElements[0]).toHaveTextContent("");
  });
});
