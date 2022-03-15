import { render, screen, within } from "@testing-library/react";
import Game from "../Game.jsx";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Game />);
});
describe("Game", () => {
  test("should be able to set cell value to X", () => {
    const cellArticles = screen.getAllByRole("article");
    const cellElements = screen.getAllByRole("gridcell");
    userEvent.click(cellArticles[0]);
    expect(cellElements[0]).toHaveTextContent("X");
  });
  test("should be able to set cell value to O after X", () => {
    const cellArticles = screen.getAllByRole("article");
    const cellElements = screen.getAllByRole("gridcell");
    userEvent.click(cellArticles[0]);
    userEvent.click(cellArticles[1]);
    expect(cellElements[1]).toHaveTextContent("O");
  });
  test("should not be able to change cell value if it has value already", () => {
    const cellArticles = screen.getAllByRole("article");
    const cellElements = screen.getAllByRole("gridcell");
    userEvent.click(cellArticles[0]);
    userEvent.click(cellArticles[0]);
    expect(cellElements[0]).toHaveTextContent("X");
  });
  test("should give winner if three same values in row", () => {
    const cellArticles = screen.getAllByRole("article");
    const cellElements = screen.getAllByRole("gridcell");
    userEvent.click(cellArticles[0]);
    userEvent.click(cellArticles[3]);
    userEvent.click(cellArticles[1]);
    userEvent.click(cellArticles[4]);
    userEvent.click(cellArticles[2]);
    expect(cellElements[0]).toHaveTextContent("X");
    expect(cellElements[3]).toHaveTextContent("O");
    expect(cellElements[1]).toHaveTextContent("X");
    expect(cellElements[4]).toHaveTextContent("O");
    expect(cellElements[2]).toHaveTextContent("X");
    const winnerHeading = screen.getByRole("heading", {
      name: /winner/i,
    });
    expect(winnerHeading).toHaveTextContent(/x/i);
  });
  test("should add point to correct player after winning", () => {
    const cellArticles = screen.getAllByRole("article");
    const cellElements = screen.getAllByRole("gridcell");
    const player1Heading = screen.getAllByTestId("playerScore");
    expect(player1Heading[0]).toHaveTextContent(0);
    userEvent.click(cellArticles[0]);
    userEvent.click(cellArticles[3]);
    userEvent.click(cellArticles[1]);
    userEvent.click(cellArticles[4]);
    userEvent.click(cellArticles[2]);
    expect(cellElements[0]).toHaveTextContent("X");
    expect(cellElements[3]).toHaveTextContent("O");
    expect(cellElements[1]).toHaveTextContent("X");
    expect(cellElements[4]).toHaveTextContent("O");
    expect(cellElements[2]).toHaveTextContent("X");
    expect(player1Heading[0]).toHaveTextContent(1);
  });
  test("should be able to reset game after winner is decleared", () => {
    const cellArticles = screen.getAllByRole("article");
    const cellElements = screen.getAllByRole("gridcell");
    userEvent.click(cellArticles[0]);
    userEvent.click(cellArticles[3]);
    userEvent.click(cellArticles[1]);
    userEvent.click(cellArticles[4]);
    userEvent.click(cellArticles[2]);
    expect(cellElements[0]).toHaveTextContent("X");
    expect(cellElements[3]).toHaveTextContent("O");
    expect(cellElements[1]).toHaveTextContent("X");
    expect(cellElements[4]).toHaveTextContent("O");
    expect(cellElements[2]).toHaveTextContent("X");
    const winnerHeading = screen.getByRole("heading", {
      name: /winner/i,
    });
    expect(winnerHeading).toHaveTextContent(/x/i);
    userEvent.click(cellArticles[0]);
    expect(winnerHeading).toHaveTextContent("Winner:");
    expect(cellElements[0]).toHaveTextContent("");
  });
});
