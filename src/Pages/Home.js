
import React from "react";
import ShoppingStuffParent from "../Components/ShoppingStuffParent";
import "./Home.css";
import { Link } from "react-router-dom";





function Home() {
    return (
        <>
            <div className="homePage">
                <h1>Producto Shop</h1>

                <br/><br/><br/><br/><br/><br/>

                <p>GET START</p>
                <p>YOUR FAVORITE</p>
                <p>SHOPPING</p>

                <div className="login-icon"><Link to={'/Login'}><i class="fa fa-user"></i> Login</Link></div>
            </div>
            <ShoppingStuffParent/>
        </>
    )
}


export default Home;