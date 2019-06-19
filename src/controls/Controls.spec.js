import React from 'react';
import Controls from './Controls.js';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

describe('toggles', () => {
    it('toggles closed gate', () => {
        const { queryByText } = render(<Controls />);
        const closeButton = queryByText(/close gate/i) 

        expect(closeButton).toBeTruthy()
    });

    it('toggles open gate', () => {
        const { queryByText } = render(<Controls closed= {true} />);
        const openButton = queryByText(/open gate/i) 

        expect(openButton).toBeTruthy()
    });
})

