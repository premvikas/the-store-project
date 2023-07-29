import {render, screen} from "@testing-library/react";
import Users from "./Users";
import { BrowserRouter} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {jest} from '@jest/globals';

import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { testUseAppSelector } from '../redux/testAppSelector';

jest.mock('../redux/redux-hooks');

beforeEach(() => {
    {/*// @ts-ignore */}
    useAppSelector.mockImplementation(testUseAppSelector);
    {/*// @ts-ignore */}
    useAppDispatch.mockImplementation(() => jest.fn());
})

afterEach(() => {
    jest.clearAllMocks();
})

describe(' Create User', () => {
    
    it('Render Title', () => {
        
            render(<BrowserRouter><Users /></BrowserRouter>);
            const linkElement = screen.getByText(/Create User/);
            expect(linkElement).toBeInTheDocument();
    });

})