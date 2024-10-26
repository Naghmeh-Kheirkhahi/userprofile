
import React from "react";
import ShoppingStuffParent from "../Components/ShoppingStuffParent";
import "./Home.css";
import ShoppingButton from "../Components/ShoppingButton";




function Home() {
    return (
        <>
            <div className="homePage">
                <h1>Producto Shop</h1>

                <br/><br/><br/><br/><br/><br/>

                <p>GET START</p>
                <p>YOUR FAVORITE</p>
                <p>SHOPPING</p>

                <ShoppingButton btnName={"BUY NOW"} btnClass={'homeBtn'} />
            </div>
            <ShoppingStuffParent/>
        </>
    )
}


export default Home;