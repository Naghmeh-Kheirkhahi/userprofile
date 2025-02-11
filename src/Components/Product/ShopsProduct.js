import React, {useContext } from "react";
import './Product.css';
import ShoppingButton from "./ShoppingButton";
import { ThemeContext } from "../../Context/ThemeContext";



function ShopsProduct(props) {

    const { theme } = useContext(ThemeContext);


    return (
        <div className="col-6 col-md-4 product-container">
            <div className="product">
                <div className="heart-icon" style={{ color: props.isFavorite && props.isLogin ? 'rgb(220, 22, 0)' : 'rgb(180, 180, 180)' }}>{props.heartIcon}</div>

                <div onClick={props.showProduct}>
                    <img src={props.image} alt="..." />
                    <div className="productInfo">
                        <h2>{props.title}</h2>
                        <p className="price"><b>Price: </b>{props.price}  &euro;</p>
                        <p className="category"><b>Category: </b>{props.category}</p>
                        <p className="description">
                            <b>Description: </b>
                            {props.description.length > 20
                                ? `${props.description.substring(0, 20)}...`
                                : props.description}
                        </p>
                        <p className="rating"><b>Rating: </b>{props.ratingRate}</p>

                        <ShoppingButton btnName={"BUY NOW"} btnClass= {`productBtn ${theme === 'dark' ? 'darkProBtn' : 'lightProBtn'}`} btnClick={props.buyProduct} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopsProduct;