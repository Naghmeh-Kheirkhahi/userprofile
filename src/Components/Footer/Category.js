import React, { useState, useEffect, useContext } from "react";
import './Footer.css';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import ShoppingStuffChild from "../Product/ShopsProduct";

function Category() {
    const navigate = useNavigate();
    const { category } = useParams();
    const { theme } = useContext(ThemeContext);
    const { username } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const filtered = products.filter(product => {
                // Adjust category names to match the API response
                return product.category === category.toLowerCase().replace("-", "'s ");
            });
            setFilteredProducts(filtered);
        }
    }, [category, products]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleSingleProduct = (productId) => {
        navigate(`/product/${productId}`);
    };

    const [quantity, setQuantity] = useState(1);

    const handleBuyProduct = (price) => {
        setQuantity(quantity + 1);
        console.log('price:', price);
        console.log('quantity:', quantity);
        console.log('total price:', quantity * price);
    };

    const handleFavoriteClick = (product) => {
        if (username) {
            let updatedFavorites;
            if (favorites.some(favorite => favorite.id === product.id)) {
                updatedFavorites = favorites.filter(favorite => favorite.id !== product.id); // Remove from favorites
            } else {
                updatedFavorites = [...favorites, product]; // Add to favorites
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
            <div className={theme === 'dark' ? 'dark-category' : ''}>
                <div className="category-container">
                    <h1 className={theme === 'dark' ? 'dark-catTitle' : ''}>{category.replace('-', "'s ")}</h1>

                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => {
                                const isFavorite = favorites.some(favorite => favorite.id === product.id);
                                return (
                                    <ShoppingStuffChild
                                        key={product.id}
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
                                );
                            })
                        ) : (
                            <p>No products found for this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;