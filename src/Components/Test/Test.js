
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";


// *** when we want to change the theme of the whole of a special page or component, we can use this code.


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

        // we can define a class for the page or component separately. so, we need to write className={test-class} in the div tag and define the class in the css file , but don't forget to mention and write the className as the input of Test function.
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
