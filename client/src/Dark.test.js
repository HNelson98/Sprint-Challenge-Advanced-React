import React from 'react'
import ReactDOM from 'react-dom'
import ChangeMode from './Components/darkmodetoggle';


test('Dark Mode Button is visible', () => {
    //ARRANGE
    const {getByText} = ReactDOM.render(<ChangeMode />);
})