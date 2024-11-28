
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";




// function Test() { we can write it in this way as well.
//     return (

//         <>
//             <div>
//             </div>
//         </>
    
//     )
// }
// export default Test;



const Test = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const myStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        textAlign: 'center',
        padding: '5rem',
    }

    return (
        <>
            <br /><br /><br /><br /><br />
            <div style={myStyle}>
                <h1>{theme === "light" ? 'This is called Light Test.' : 'This is called Dark Test.'}</h1>
                <br />
                <button onClick={toggleTheme}>Change Theme</button>
            </div>

        </>
    )
}

export default Test;
