
import React from "react";

import './ShoppingStuff.css';


function ShoppingButton({btnName , btnClass, btnClick}){
    
        return(
            <button className={btnClass} onClick={btnClick}>{btnName}</button>
        )
}


export default ShoppingButton;