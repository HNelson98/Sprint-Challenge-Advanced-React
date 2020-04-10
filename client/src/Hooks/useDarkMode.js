import  { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    //const players = document.getElementsByClassName("playerCard")

    //dosen't work
    // players.forEach(element => {
    //     darkMode ? element.classList.add("dark-mode") : element.classList.remove("dark-mode")
    // });

    useEffect(() => {
        darkMode
        ? document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode");
        
    }, [darkMode]);

    return [darkMode, setDarkMode];

}

export default useDarkMode;