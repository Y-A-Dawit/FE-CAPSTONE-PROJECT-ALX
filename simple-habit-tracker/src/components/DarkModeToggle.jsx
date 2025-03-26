import { useState, useEffect } from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === "enabled";
    });

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled')
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default DarkModeToggle;