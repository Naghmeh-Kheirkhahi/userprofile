
import React from "react";

import './ShoppingStuff.css';


function ShoppingStuffChild(props) {

    return (
        <>

            <div className="col-4 product">
                <img src={props.image} alt="..." />
                <div className="infoProduct">
                    <h1>{props.title}</h1>
                    <p className="price"><b>Price: </b>{props.price} Euros</p>
                    <p className="category"><b>Category: </b>{props.category}</p>
                    <p className="description"><b>Description: </b>{props.description}</p>
                    <p className="rating"><b>Rating: </b>{props.ratingRate}</p>
                </div>
            </div>

        </>
    )
}


export default ShoppingStuffChild;