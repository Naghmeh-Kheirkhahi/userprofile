
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";
import ShopsProduct from "./ShopsProduct";
import ShoppingButton from "./ShoppingButton";
import './Product.css';



function ShopsProductList() {

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                // console.log(res);
                setData(res.data)
            })
    }, [])


    const handleSingleProduct = (productId) => {
        console.log(productId);
        navigate(`/product/${productId}`)
    }


    const [quantity, setQuantity] = useState(1);

    const handleBuyProduct = (price) => {
        console.log('price:' + price);
        setQuantity(quantity + 1);
        console.log('quantity:' + quantity);
        console.log('total price:' + quantity * price);
    }


    const [category, setCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryClick = (category) => {
        console.log(category);
        setCategory(category);
    }


    useEffect(() => {
        if (category) {
            const filtered = data.filter(item => item.category === category);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(data);
        }

    }, [category, data])

    // useEffect(() => {
    // Runs only on the first render
    // }, []);

    // useEffect(() => {
    // Runs on the first render
    // Runs any time that is dependent on the value 'category' and changes any time according to this value 
    // }, [category]);

    // we have all the API products in the data of the useState, then we filter the data and 
    // take the products having the same category with the category we chose by clicking one of the four buttons on the home page
    // after filtering we put the filtered products into the filterProducts and put it into the setData to put into the data and update the array of the data.


    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorite = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavorites(savedFavorite);
    }, [])


    const { username } = useContext(UserContext);

    const handleFavoriteClick = (product) => {
        if (username) {
            let updatedFavorites;
            if (favorites.some(favorite => favorite.id === product.id)) {
                updatedFavorites = favorites.filter(favorite => favorite.id !== product.id); // it means that we remove the product from the favorites
            } else {
                updatedFavorites = [...favorites, product];
            }
            localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } else {
            alert('You need to Login first to add your Favorites');
            navigate('/login');
        }
    };


    return (
        <>
            <div className="main-productList">
                <h1 className={theme=== 'dark' ? 'dark-title' : ''}>Elnagora Shop Products</h1>

                <div class="btns">
                    <ShoppingButton btnName={"Men's Clothing"} btnClass={theme === 'dark' ? 'catBtn darkCatBtn' : 'catBtn lightCatBtn'} btnClick={() => handleCategoryClick("men's clothing")} />
                    <ShoppingButton btnName={"Women's Clothing"} btnClass={theme === 'dark' ? 'catBtn darkCatBtn' : 'catBtn lightCatBtn'} btnClick={() => handleCategoryClick("women's clothing")} />
                    <ShoppingButton btnName={"Jewelry"} btnClass={theme === 'dark' ? 'catBtn darkCatBtn' : 'catBtn lightCatBtn'} btnClick={() => handleCategoryClick("jewelery")} />
                    <ShoppingButton btnName={"Electronics"} btnClass={theme === 'dark' ? 'catBtn darkCatBtn' : 'catBtn lightCatBtn'} btnClick={() => handleCategoryClick("electronics")} />
                </div>


                <div className="row">
                    {filteredProducts.map(product => {
                        const isFavorite = favorites.some(favorite => favorite.id === product.id); // we put isFavorite into the return part (not out) when we want to do mapping on the products because if we put it out of it, it could not be understood because product was not already defined.
                        return (
                            <ShopsProduct
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                category={product.category}
                                description={product.description}
                                ratingRate={product.rating.rate}
                                showProduct={() => handleSingleProduct(product.id)}

                                buyProduct={() => handleBuyProduct(product.price)}

                                heartIcon={<i
                                    className="fa fa-heart"
                                    onClick={() => handleFavoriteClick(product)}
                                ></i>}
                                isFavorite={isFavorite}
                                isLogin={username}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ShopsProductList;
