
import React , {useContext} from "react";
import ShopsProductList from "../../Components/Product/ShopsProductList";
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
                <ShopsProductList />
            </div>
        </>
    )
}


export default Home;