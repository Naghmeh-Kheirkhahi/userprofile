

// if ({ state }) {
//     true
// }

// else {

//     false
// }

// state ? {} : {}   another way T / F



import React, { useEffect, useState } from "react";
import './Cart.css';
import { useLocation } from "react-router-dom";




function Cart() {

    // const [quantity, setQuantity] = useState(1); // we dont need to use it because we have to define and consider a special quantity for each product

    const [products, setProducts] = useState([]) // when we use useState , we can store different states of a property or variable and store the last state of it. Whereas when we define a variable in this way: var name = 'Ali' and it changes and when we run and want to use it, it will use the first input not the one put after changing.

    const location = useLocation(); // useNavigate sends something like id or any data/parameter to somewhere else and we can determine a url and send/pass something like id to the url by useNavigate
    const { state } = location; // useParams gets only one parameter like id sent by useNavigate but useLocation does something like this but can get more than one parameters in an Object form from useNavigate, so useLocation is useful for website security. Also useLocation can determine the location we are in and where we were and where we are going.
    // console.log(state);
    // console.log(state.name, state.price, state.category, state.image);




    useEffect(() => {

        // we used useEffect bacause we want to show the products and items of our API automatically without pushing or clicking on something and we added [] to it to be done only one time.
        const getProducts = JSON.parse(localStorage.getItem('productKey')); // before mapping we should get the products from LS and store somewhere
        // console.log('product in card:' ,getProduct);

        const productWithQuntity = getProducts.map(product => ({

            ...product, quantity: 1
            // product is an object and we added a new propertu to it called quantity , so we don not need to put them in a [] like the thing we did in SingleProduct
        }

        ))

        setProducts(productWithQuntity); // we have to set it to save in products array in useState we defined above. we need to store this state of the LS including the products with quantity as a property. the new state will be the input of setProducts and the whole will be put in products in the useState. 
        console.log('product with quantity:', productWithQuntity);

    }, [])








    const updateQuantity = (productId, change) => { // we got the id of the product we want to change its quantity. we also do reducing and adding the quantity together in a same method in which we defined an input called change and in the return part, we wrote +1 for change to do adding and -1 to do reducing.

        const updateProducts = products.map(product => {
            if (product.id === productId) {
                const newQuantity = product.quantity + change; // here we compared the id of the product we want to change its quantity with the id of each products we chose and sent to the cart.
                // if they are same , we can add or reduce its quantity and then store the new result in something
                return { ...product, quantity: newQuantity > 0 ? newQuantity : 0 } // we return the product including all the product in the LS and add the quantity of each product to each one 
                // but we have to set a condition that is if it is equal to 0 or more than 0, it is ok but if it is not (it means minus number), we should stop the quantity on 0.
            }
            return product;

        }).filter(product => product.quantity > 0) // if the quantity of a product gets 0, it will be deleted automatically.

        setProducts(updateProducts) // we need to update the product array in the LS after giving them quantity property and changing it for each product.
    }





    // cars=['206','207','pride','405']; // an example

    // const newcar = cars.filter((car=>{

    //     return car !== 'pride'
    // }))
    // newcar=['206','207','405']

    const deleteProductFromCart = (productId) => {

        // we used filter for deleting the items from the cart. filter can return the items whose id s are not the same with the id of the item we wanna delete.
        //we can use map for deleting the items we want but we need to add if condition and the code would be long.
        const newProducts = products.filter(product => product.id !== productId);

        // we have to update the array in the state we defined for the local storage but in the setProducts of the useState, we have to put newProducts because we put the filter into it
        // but we can write products instead of newProducts. Also we have to update the local storage by setItem.
        setProducts(newProducts);
        localStorage.setItem('productKey', JSON.stringify(newProducts));
    };





    let totalQuantity = products.reduce((total, product) => {
        return (total + product.quantity);
    }, 0);





    let totalPrice = products.reduce((total, product) => {
        return (total + (product.price * product.quantity))
    }, 0)

    let totalPriceWithShipping = totalPrice + 5; // we can set some conditions if we have different types of shipping, but here it is constant.







    return (

        <>

            {state ? (
                <div className="mainClass cart">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-8 cart">
                                <div class="title">
                                    <div class="row">
                                        <div class="col"><h4><b>Shopping Cart</b></h4></div>
                                        <div class="col align-self-center text-right text-muted">{totalQuantity} Items</div>
                                    </div>
                                </div>
                                <div class="row border-top border-bottom">
                                    {
                                        products.map(item => (

                                            <div class="row main align-items-center">
                                                <div class="col-2"><img class="img-fluid" src={item.image} /></div>
                                                <div class="col">
                                                    <div class="row text-muted">Name: {item.name}</div>
                                                    <div class="row">Category: {item.category}</div>
                                                </div>
                                                <div class="col">
                                                    <p onClick={() => updateQuantity(item.id, -1)}>-</p><p class="border"></p>{item.quantity}<p onClick={() => updateQuantity(item.id, 1)} >+</p>
                                                </div>
                                                <div class="col">&euro; {item.price} <i class="recyclebin fa" onClick={() => deleteProductFromCart(item.id)}>&#xf014;</i></div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
                            </div>
                            <div class="col-md-4 summary">
                                <div><h5><b>Summary</b></h5></div>
                                <hr />
                                <div class="row">
                                    <div class="col" style={{ paddingLeft: '0' }}>{totalQuantity} Items</div>
                                    <div class="col text-right">&euro; {totalPrice}</div>
                                </div>
                                <form>
                                    <p>SHIPPING</p>
                                    <select><option class="text-muted">Standard-Delivery- &euro;5.00</option></select>
                                </form>
                                <div class="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                    <div class="col">TOTAL PRICE</div>
                                    <div class="col text-right">&euro;
                                        {totalPriceWithShipping}
                                    </div>
                                </div>
                                <button class="cartBtn">CHECKOUT</button>
                            </div>
                        </div>

                    </div>
                </div>


            )


                : (
                    <div><p>Your Cart is empty.</p></div>
                )}
        </>

    )
}

export default Cart;