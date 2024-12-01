
import React, {createContext, useEffect, useState} from "react";




export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }


    useEffect(() => {
        
        document.body.className = theme==='dark' ? 'dark-mode' : 'light-mode';
            
        } , [theme]);


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
