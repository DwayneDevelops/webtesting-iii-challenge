import React from 'react';
import Display from './Display.js';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

describe('display', () => {
    it('display green when door is unlocked', () => {
        const { queryByText } = render(<Display />);
        const unlockedDisplay = queryByText(/unlocked/i);
        
        expect(unlockedDisplay).toBeTruthy();
        expect(unlockedDisplay.classList).toContain('green-led')
    });

    it('display red when door is locked', () => {
        const { queryByText } = render(<Display locked = {true} />);
        const lockedDisplay = queryByText(/locked/i);
        
        expect(lockedDisplay).toBeTruthy();
        expect(lockedDisplay.classList).toContain('red-led')
    });

    it('display green when door is open', () => {
        const { queryByText } = render(<Display />);
        const openDisplay = queryByText(/open/i);
        
        expect(openDisplay).toBeTruthy();
        expect(openDisplay.classList).toContain('green-led')
    });

    it('display red when door is closed', () => {
        const { queryByText } = render(<Display closed = {true} />);
        const closedDisplay = queryByText(/closed/i);
        
        expect(closedDisplay).toBeTruthy();
        expect(closedDisplay.classList).toContain('red-led')
    });
})
