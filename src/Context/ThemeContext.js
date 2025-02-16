
import React, { createContext, useEffect, useState } from "react";




export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    })

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    // children are used  to wrap the components that will be used in the app. It is used to connect the components to the ThemeContext.
    // we need to save the last state of theme in the local storage to keep the theme when the page is refreshed. We can use the localStorage.setItem method to save the theme in the local storage and the localStorage.getItem method to get the theme from the local storage.


    useEffect(() => {
        // document.body.className = theme ==='dark' ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);
    // we can write useEffect when we want to define a general dark-mode and light-mode classes for the whole app. But in this program we have to define the both classes for each page and component separately.
    // if we put no array, it will mean the program can be run infinitely but if we don't put theme in the array, it will be run only once when the program is rendered. lastly, if we put theme in the array, it will be run whenever the theme is changed.


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>

        // we can connect  theme and toggleTheme to the all pages and components included the whole app by using this code.
    )
}


// the difference between export and export default is that we can export multiple items from a file by using export and the imported items must use the exact names defined in the export, but we can export only one item by using export default and the name used for the imported item can be different from the export name when it is used in app.js.
