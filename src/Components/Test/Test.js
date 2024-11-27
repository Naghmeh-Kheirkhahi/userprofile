
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";


const Test = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const myStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        padding: '1rem',
    }

    return (
        <>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div style={myStyle}>
                <h1>{theme === "light" ? 'This is called Light Test.' : 'This is called Dark Test.'}</h1>
                <button onClick={toggleTheme}>Change Theme</button>
            </div>

        </>
    )
}

export default Test;
