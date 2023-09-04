import { createContext, useEffect, useState } from 'react';
import { IDarkMode, darkModeprop } from '../interfaces/darkModeInterface';

export const DarkModeContext = createContext<IDarkMode>({} as IDarkMode); // preparar interface dark mode

interface DarkModeProps {
    children: JSX.Element | JSX.Element[];
}

export const DarkModeContextProvider = ({ children }: DarkModeProps) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode') || '{"other"}')
    );

    const toggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle}}>
            { children }
        </DarkModeContext.Provider>
    )
}