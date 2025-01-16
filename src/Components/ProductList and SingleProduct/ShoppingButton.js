
import React from "react";

import './ShoppingStuff.css';


function ShoppingButton({btnName , btnClass, btnStyle, btnClick}){
    
        return(
            <button className={btnClass} style={btnStyle} onClick={btnClick}>{btnName}</button>
        )
}


export default ShoppingButton;