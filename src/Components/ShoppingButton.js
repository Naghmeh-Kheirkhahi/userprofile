
import React from "react";

import './ShoppingStuff.css';


function ShoppingButton({btnName , btnClass}){
    
        return(
            <button className={btnClass}>{btnName}</button>
        )
}


export default ShoppingButton;