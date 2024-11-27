import React from "react";
import { useState } from "react";
import './Button.css';


function Button() {

    const [count, setCount] = useState(0);
    // count = 0

    const countHandler = () => {
        setCount(count + 1);

        // count = 1 and ...
    }





    const [name, setName] = useState('');


    const nameChanger = (e) => {
        setName(e.target.value);
    }








    return (

        <>
            <button onClick={countHandler} className="mybtn">{count}</button>
            {/* <p>{count}</p> we can show the counter here in this way */}


            <h2 className="mytitle">Please Enter Your Name:</h2>
            <input className="myinput" type="text" placeholder="Enter your name here"

                onChange={nameChanger}

            />

            <div>
                <p className="mytext"><b>Text: </b>{name}</p>
            </div>
        </>

    )


}


export default Button;