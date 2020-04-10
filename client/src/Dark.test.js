import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import ChangeMode from './Components/darkmodetoggle';
import { render } from '@testing-library/react';



test('Dark Mode Button is visible', () => {
    //ARRANGE
    const {getByText} = render(<ChangeMode/>);
    //act none

    //assert
    const button = getByText(/Click to Change Dark Mode!/i);

    expect(button).toBeVisible();
})