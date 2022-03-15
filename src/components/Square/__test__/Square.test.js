import { render, screen } from '@testing-library/react';
import Square from '../Square';

const value = "X"

describe("square", () => {
    test("should be empty initally", () => {
        render(<Square />);
        expect(screen.getByRole("gridcell")).toBeEmptyDOMElement()
    })
    test("should show X", () => {
        render(
            <Square
                value={value}
            />
        );
        expect(screen.getByText(/x/i)).toBeInTheDocument();
    })
})