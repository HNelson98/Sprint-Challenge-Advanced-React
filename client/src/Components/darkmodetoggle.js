import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';

const ChangeMode = () => {
    const [darkMode, setDarkMode] = useDarkMode("dark");
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <button className= "darkModeBtn" onClick={toggleMode} >Click to Change Dark Mode!</button>
    )
}

export default ChangeMode