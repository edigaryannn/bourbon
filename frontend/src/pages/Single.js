import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import OrderData from '../data/OrderData.js';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { addToFavs, delFromFavs } from '../store/authFavorites.js';
import { useAuthStore } from '../store/authUser.js';

export default function Single() {
    const { id } = useParams();
    const [singleOrder, setSingleOrder] = useState({});
    const [favoritOrder, setFavoritOrder] = useState(false);
    const { user } = useAuthStore();

    useEffect(() => {
        const loadOrder = async () => {
            const data = await OrderData();
            const selectedSingleData = data.find(single => single.id === parseInt(id));
            setSingleOrder(selectedSingleData);
        };
        loadOrder();
    }, [id]);

    useEffect(() => {
        if (user && user.favorites) {
            const stringId = id.toString();
            console.log('User favorites:', user.favorites);
            console.log('Converted favorites:', user.favorites.map(fav => fav.toString()));
            console.log('Current ID:', stringId);
            const isFavorite = user.favorites.map(fav => fav.toString()).includes(stringId);
            console.log('Is favorite:', isFavorite);
            setFavoritOrder(isFavorite);
        }
    }, [user, id]);

    const handleClick = async () => {
    if (favoritOrder) {
        await delFromFavs(user, id);
        setFavoritOrder(false); // Update local state immediately
    } else {
        await addToFavs(user, id);
        setFavoritOrder(true); // Update local state immediately
    }
};

    if (!singleOrder) return <div>Loading...</div>;

    return (
        <main>
            <div className="single-cont">
                <div className="single-div">
                    <div className="single-good">
                        <div className="single-img">
                            <img src={singleOrder.imgUrl} alt={singleOrder.name} />
                        </div>
                        <div className="single-text">
                            <h1>{singleOrder.name}</h1>
                            <p>{singleOrder.description}</p>
                            <div className="single-order">
                                {user && (
                                    <>
                                        <GoHeart
                                            className="single-fav"
                                            style={{ display: !favoritOrder ? 'block' : 'none' }}
                                            onClick={handleClick}
                                        />
                                        <GoHeartFill
                                            className="single-fav"
                                            style={{ display: favoritOrder ? 'block' : 'none' }}
                                            onClick={handleClick}
                                        />
                                    </>
                                )}
                                <button className="single-btn">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
