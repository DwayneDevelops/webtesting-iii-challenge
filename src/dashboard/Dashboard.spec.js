import React from 'React';
import Dashboard from './Dashboard.js';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
// import renderer from 'react-test-renderer';

describe('closed', () => {
    it('renders unlocked', () => {
        const { queryByText } = render(<Dashboard />);
        const unlockedDisplay = queryByText(/unlocked/i);

        expect(unlockedDisplay).toBeTruthy()
    });

    it('renders open', () => {
        const { queryByText } = render(<Dashboard />);
        const openDisplay = queryByText(/open/i);

        expect(openDisplay).toBeTruthy()
    });

    it('renders lock gate', () => {
        const { queryByText } = render(<Dashboard />);
        const lockButton = queryByText(/lock gate/i);

        expect(lockButton).toBeTruthy()
    });

    it('renders close gate', () => {
        const { queryByText } = render(<Dashboard />);
        const closeButton = queryByText(/close gate/i);

        expect(closeButton).toBeTruthy()
    });
})