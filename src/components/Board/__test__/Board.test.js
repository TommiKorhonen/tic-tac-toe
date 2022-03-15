import { render, screen } from '@testing-library/react';
import Board from '../Board';

describe("Board", () => {
    test("should render 9 squares", () => {
        render(<Board />)
        expect(screen.getAllByRole("gridcell").length).toBe(9)
    })
})