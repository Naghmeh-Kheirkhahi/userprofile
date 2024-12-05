
import React , {useContext} from "react";
import ShoppingStuffParent from "../../Components/ProductList and SingleProduct/ShoppingStuffParent";
import "./Home.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";





function Home() {

    const { theme } = useContext(ThemeContext);

    
    return (
        <>
            <div className={theme === 'dark' ? 'dark-home' : ''}>
                <div className="homePage">
                    <h1>Producto Shop</h1>

                    <p>GET START</p>
                    <p>YOUR FAVORITE</p>
                    <p>SHOPPING</p>

                    <div className="login-icon"><Link to={'/Login'}><i class="fa fa-user"></i> Login</Link></div>
                </div>
                <ShoppingStuffParent />
            </div>
        </>
    )
}


export default Home;