import React from "react";
import { useState } from "react";


function Button() {

    const [count, setCount] = useState(0);
        // count = 0

        const countHandler = () => {
            setCount(count + 1);
    
            // count = 1 and ...
        }





        const [name, setName] = useState('');


        const nameChanger = (e)=>{
            setName(e.target.value);
        }

    
 
   

    
    

    return (

        <>
            {/* <button onClick={countHandler}>{count}</button> */}

            
            <h2>Please Enter Your Name:</h2>
            <input type="text" placeholder="Enter your name here"
            
            onChange={nameChanger}

            />

            <div>
                <p><b>Text: </b>{name}</p>
            </div>
        </>

    )


}


export default Button;