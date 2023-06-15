import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RandomList from '../RandomList';

afterEach(cleanup);
describe('RandomList Component', () => {
    it("Component is defined in `src/RandomList.js` as default export", () => {
        expect(RandomList).toBeTruthy()
        expect(RandomList).not.toEqual({})
    })
    it("Component renders without errors", () => {
        render(<RandomList />);
    })
})
describe('Numbers', () => {
    it("Component has a button", () => {
        render(<RandomList />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })
    it("Number is added when button is clicked", async () => {
        const { baseElement } = render(<RandomList />);
        const button = screen.getByRole("button");
        const numbers = baseElement.textContent.match(/[0-9]/gm) || []
        await fireEvent.click(button)
        const numbersAfterClick = baseElement.textContent.match(/[0-9]/gm)
        expect(numbersAfterClick.length).toBeGreaterThan(numbers.length)
    })
});


