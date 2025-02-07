import React, { useState, useEffect, useContext } from "react";
import './Footer.css';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import axios from "axios";
import ShoppingStuffChild from "../Product/ShopsProduct";



function Category() {
    const navigate = useNavigate();
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);



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



    const { theme } = useContext(ThemeContext);


    return (
        <>
            <div className={theme === 'dark' ? 'dark-category' : ''}>
                <div className="category-container">
                    <h1 className={theme === 'dark' ? 'dark-catTitle' : ''}>{category.replace('-', "'s ")}</h1>

                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
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
                                />
                            ))
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