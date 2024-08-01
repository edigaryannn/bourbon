import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/authUser.js";
import { Link } from "react-router-dom";
import OrderData from '../data/OrderData.js';

export default function Favorites() {
    const { user } = useAuthStore();
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const loadCompany = async () => {
            if (user && user.favorites) {
                const data = await OrderData();
                const drinks = user.favorites.map(favoriteId =>
                    data.find(item => item.id === parseInt(favoriteId))
                ).filter(item => item !== undefined); // Filter out undefined values
                setCompany(drinks);
            }
        };
        loadCompany();
    }, [user]);

    return (
        <main>
            <div className="favorites-cont">
                <div className="main-heading">
                    <h1>Your Favorite Drinks</h1>
                </div>
                <div className="colums-row">
                    <div className="colums-row-div fav-div">
                        {company.length > 0 ? (
                            company.map((item, index) => (
                                <div className="row-div" key={index} id={item.id}>
                                    <div className="row-img">
                                        <img src={item.imgUrl} alt={item.name} />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <Link to={`/single/${item.id}`} ><span className="order-snap">Order</span></Link>
                                </div>
                            ))
                        ) : (
                            <p>No favorite drinks found.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
