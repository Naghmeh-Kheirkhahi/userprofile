
import React, { useState, useContext, useEffect } from "react";
import './Menu.css';
import UserPanelNav from './../UserPanelNav';
import { ThemeContext } from "../../../Context/ThemeContext";



function Interests() {

    const { theme } = useContext(ThemeContext);
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const savedInterests = JSON.parse(localStorage.getItem('favorite')) || [];
        setInterests(savedInterests);
    }, [])


    const handleDeleteClick = (product) => {
        const updatedInterests = interests.filter(interest => interest.id !== product.id);
        setInterests(updatedInterests);
        localStorage.setItem('favorite', JSON.stringify(updatedInterests));
    }


    return (
        <>
            <div className={theme === 'dark' ? 'dark-main-class' : 'main-class'}>
                <div className="row">
                    <div className="col-3">
                        <UserPanelNav />
                    </div>


                    <div className="col-9">
                        <div className="main-container">
                            <h1>My Interests</h1>

                            <p className="see-interests">Here you can see your <span><i class="fa fa-heart"></i> favourite <i class="fa fa-heart"></i></span> Products.</p>

                            <div className="row">
                                {interests.length > 0 ? (
                                    interests.map(interest => (
                                        <div className="col-4 interests-container">
                                            <div className="fav-product">
                                                <div className="delete-icon"><i class="fa fa-close" onClick={() => handleDeleteClick(interest)}></i></div>

                                                <img src={interest.image} alt="..." />
                                                <div className="fav-productInfo">
                                                    <h2>{interest.title}</h2>
                                                    <p className="fav-price"><b>Price: </b>{interest.price} Euros</p>
                                                    <p className="fav-category"><b>Category: </b>{interest.category}</p>
                                                    <p className="fav-description">
                                                        <b>Description: </b>
                                                        {interest.description.length > 20
                                                            ? `${interest.description.substring(0, 20)}...`
                                                            : interest.description}
                                                    </p>
                                                    <p className="fav-rating"><b>Rating: </b>{interest.ratingRate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="notSee-interests">You have chosen No Products as Your Interests yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Interests;