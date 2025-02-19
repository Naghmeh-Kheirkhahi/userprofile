
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Product.css';
import ShoppingButton from "./ShoppingButton";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";






function SingleProduct() {

    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const { productId } = useParams() // we get the id of each product and make an individual address for each one using navigate and pass it to the useParams to use it for addressing the address of each product.
    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`) // when we do like this , we pass th id of each product, so they dont need to use map and item on data array. So in return, we use only product not item
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
    }, [])



    const addProductToCart = (productId) => {
        navigate('/Cart')

        // navigate('/Cart', {
        //     state: { id: product.id, name: product.title, category: product.category, price: product.price, image: product.image, quantity: 1 }
        // }) I use it when we have no LS and we want to pass the data to the Cart page. But now we use LS to store the data and pass it to the Cart page.

        // if(getProduct==null){
        //     books=[]
        // }
        // else{
        //     books.push(book)
        // }

        // const getProduct = JSON.parse(localStorage.getItem('products')) || []; 
        // const updateProductStored = [...getProduct, product]; 
        // localStorage.setItem('products', JSON.stringify(updateProductStored)); 

        const getProduct = JSON.parse(localStorage.getItem('productKey')) || [];
        const existingProduct = getProduct.find(product => product.id === productId); // if the product is already in the LS, it will be updated and if not, it will be added to the LS.

        if (existingProduct) { // we need to add a property called quantity to each product in the LS to save it in th LS. in the Cart part, we added quantity to each product we chose but  we did not save it in the LS.

            const updateProduct = getProduct.map(product =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )

            localStorage.setItem('productKey', JSON.stringify(updateProduct));
        } else {
            const updateProduct = [...getProduct, { ...product, quantity: 1 }]; // Spread Operator makes a copy from the Local Storage meaning from getProduct and adds the new product to the LS. it does in fact the work of Push.

            localStorage.setItem('productKey', JSON.stringify(updateProduct)); // update the LS
        }
    }



    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorite')) || [];
        setFavorites(savedFavorites);
    }, [])



    const { username } = useContext(UserContext);
    const isFavorite = favorites.some(favorite => favorite.id === product.id); // here we put isFavorite because we are in the sinle product page and it shows only one product already defines. So, when we define isFavorite here, it can be understood.

    const addProductToInterest = (product) => {
        if (username) {
            let updatedFavorites;
            if (isFavorite) {
                updatedFavorites = favorites.filter(favorite => favorite.id !== product.id);
            } else {
                updatedFavorites = [...favorites, product];
                alert('The product has been added to your Favorites');
            }
            localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } else {
            alert('You need to Login first to add your Favorites');
            navigate('/login');
        }
    }



    return (
        <>
            <div className={theme === 'dark' ? 'dark-singleProduct' : ''}>
                <div className={`singleProSection ${theme === 'dark' ? 'dark-singleProSection' : 'light-singleProSection'}`}>
                    <img src={product.image} />
                    <div className="ps-5">
                        <h1>{product.title}</h1>
                        <p className="productPrice"><b>{product.price} &euro;</b></p>
                        <p className="productCat"><b>{product.category} </b>Category</p>
                        <p className="productDescription">{product.description}</p>
                        <p className="productRating"><b>Rating: {product.rating?.rate} </b>
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                const fullStar = ratingValue <= product.rating?.rate;
                                const halfStar = ratingValue - 0.5 <= product.rating?.rate && ratingValue > product.rating?.rate;
                                return (
                                    <span key={index} className={`fa fa-star${fullStar ? '' : halfStar ? '-half-alt' : '-o'}`}></span>
                                );
                            })}
                        </p>

                        <div className="signleProBtns">
                            <ShoppingButton btnName={"BUY NOW"} btnClass={`singleProBtn ${theme === 'dark' ? 'darkSingleProBtn' : 'lightSingleProBtn'}`} btnClick={() => addProductToCart(product.id)} />

                            <ShoppingButton
                                btnName={isFavorite && username ? 'Remove from Favorites' : 'Add to Favorites'}
                                btnStyle={{ color: isFavorite && username ? 'rgb(255, 255, 255)' : 'rgb(139, 14, 0)' }}
                                btnClass={`favProBtn ${theme === 'dark' ? 'darkFavProBtn' : 'lightFavProBtn'}`} btnClick={() => addProductToInterest(product)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;