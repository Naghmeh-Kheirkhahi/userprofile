
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ShoppingStuffChild from "./ShoppingStuffChild";
import ShoppingButton from "./ShoppingButton";
import './ShoppingStuff.css';







function ShoppingStuffParent() {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                // console.log(res);
                setData(res.data)
            })
    }, [])





    const navigate = useNavigate();

    const handleSingleProduct = (productId) => {
        console.log(productId);

        navigate(`/product/${productId}`)
    }




    const[quantity, setQuantity]=useState(1);

    const handleBuyProduct = (price) => {
        console.log('price:'+ price);

        setQuantity(quantity + 1);
        console.log('quantity:' + quantity);

        console.log('total price:' + quantity*price);
    }







    const [category, setCategory] = useState('');

    const [filterProducts , setFilterProducts] = useState([]);


    const handleCategoryClick = (category) =>{
        console.log(category);

        setCategory(category);
    }


    useEffect(() => {
        if (category) { 
            let filterProducts = data.filter(
                item => {
                    return item.category == category
                }
            )

            setFilterProducts(filterProducts);
    
        }

        else {
            setFilterProducts(data);
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



    





    return (
        <>
            <div className="mainClassProduct">
                <h1>Different Products</h1>

                <div class="btns">
                    <ShoppingButton btnName={"Men's Clothing"} btnClass={'categoryBtn'} btnClick={() => handleCategoryClick("men's clothing")}/>
                    <ShoppingButton btnName={"Women's Clothing"} btnClass={'categoryBtn'} btnClick={() => handleCategoryClick("women's clothing")}/>
                    <ShoppingButton btnName={"Jewelery"} btnClass={'categoryBtn'} btnClick={() => handleCategoryClick("jewelery")}/>
                    <ShoppingButton btnName={"Electronics"} btnClass={'categoryBtn'} btnClick={() => handleCategoryClick("electronics")}/>
                </div>


                <div className="row">
                    {filterProducts.map(item => (
                        <ShoppingStuffChild
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            ratingRate={item.rating.rate}
                            showProduct={() => { handleSingleProduct(item.id) }}

                            buyProduct={() => { handleBuyProduct(item.price) }}
                        />

                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShoppingStuffParent;
