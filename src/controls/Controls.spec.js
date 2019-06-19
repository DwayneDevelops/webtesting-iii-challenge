import React from 'react';
import Controls from './Controls.js';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

describe('toggles', () => {
    it('toggles closed gate', () => {
        const { queryByText } = render(<Controls />);
        const closeButton = queryByText(/close gate/i) 

        fireEvent.click(closeButton)

        expect(closeButton).toBeTruthy()
    });

    it('toggles open gate', () => {
        const { queryByText } = render(<Controls closed= {true} />);
        const openButton = queryByText(/open gate/i) 

        fireEvent.click(openButton)

        expect(openButton).toBeTruthy()
    });

    it('toggles locked gate', () => {
        const { queryByText } = render(<Controls />);
        const lockButton = queryByText(/lock gate/i) 

        fireEvent.click(lockButton)

        expect(lockButton).toBeTruthy()
    });

    it('toggles unlocked gate', () => {
        const { queryByText } = render(<Controls locked = {true} />);
        const unlockButton = queryByText(/unlock gate/i) 

        fireEvent.click(unlockButton)

        expect(unlockButton).toBeTruthy()
    });
})