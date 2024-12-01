
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ShoppingStuff.css';
import ShoppingButton from "./ShoppingButton";
import { useNavigate } from "react-router-dom";






function SingleProduct() {

    const { productId } = useParams() // we get the id of each product and make an individual address for each one using navigate and pass it to the useParams to use it for addressing the address of each product.
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`) // when we do like this , we pass th id of each product, so they dont need to use map and item on data array. So in return, we use only product not item
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
    }, [])






    const navigate = useNavigate();
    const addProductToCart = (productId) => {
        navigate('/Cart', {
            state: { id: product.id, name: product.title, category: product.category, price: product.price, image: product.image, quantity: 1 }
        })

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
        }

        else {
            const updateProduct = [...getProduct, { ...product, quantity: 1 }]; // Spread Operator makes a copy from the Local Storage meaning from getProduct and adds the new product to the LS. it does in fact the work of Push.

            localStorage.setItem('productKey', JSON.stringify(updateProduct)); // update the LS
        }
    }

 
    




    return (
        <>
            <div className="singleProduct">
                <img src={product.image} />
                <div className="ps-5">
                    <h1>{product.title}</h1>
                    <p className="productPrice"><b>{product.price} </b>Euro</p>
                    <p className="productCategory"><b>{product.category} </b>category</p>
                    <p className="productDescription">{product.description}</p>
                    <p className="productRating"><b>Rating: </b><span class="fa fa-star"></span><span class="fa fa-star"></span>
                        <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></p>

                    <ShoppingButton btnName={"BUY NOW"} btnClass={'singleProductBtn'} btnClick={()=> addProductToCart(product.id)} />

                    {/* <button onClick={buySingleProduct}>BUY NOW</button> */}

                    {/* we don't use props here because we want to use this method in this component. */}
                </div>
            </div>
        </>
    )
}


export default SingleProduct;