import React , {useContext} from "react";
import './ShoppingStuff.css';
import ShoppingButton from "./ShoppingButton";
import { ThemeContext } from "../../Context/ThemeContext";




function ShoppingStuffChild(props) {

    const { theme } = useContext(ThemeContext);


    return (
        <div className="col-4 product-container">
            <div className="product" onClick={props.showProduct}> 
                {/* we can chose any name for click action after props*/}
                {/* <div className="card"> */}
                    <img src={props.image} alt="..." />
                    <div className="productInfo">
                        <h2>{props.title}</h2>
                        <p className="price"><b>Price: </b>{props.price} Euros</p>
                        <p className="category"><b>Category: </b>{props.category}</p>
                        <p className="description">
                            <b>Description: </b>
                            {props.description.length > 20 
                                ? `${props.description.substring(0, 20)}...` 
                                : props.description}
                        </p>
                        <p className="rating"><b>Rating: </b>{props.ratingRate}</p>

                        {/* <button onClick={props.buyProduct}>BUY NOW</button> */}

                        <ShoppingButton btnName={"BUY NOW"} btnClass={theme === 'dark' ? 'themeProBtn' : 'productBtn'} btnClick={props.buyProduct}/>
                    </div>
                {/* </div> */}
            </div>
            {/* Repeat .product divs as needed */}
        </div>
    )
}

export default ShoppingStuffChild;