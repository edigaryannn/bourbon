import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import OrderData from '../data/OrderData';
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function Single() {

    const { id } = useParams();
    const [singleOrder, setSingleOrder] = useState({});
    const [favoritOrder, setFavoritOrder] = useState('noFav');

    useEffect(() => {
        const loadOrder = async () => {
            const data = await OrderData();
            const selectedSingleData = data.find(single => single.id === parseInt(id));
            setSingleOrder(selectedSingleData);

        }
        loadOrder();
    }, [id]);

    const handleclick = (formtype) =>{
        setFavoritOrder(formtype);
    }


    if (!singleOrder) return <div>Loading...</div>

    return (
        <main>
            <div className="single-cont">
                <div className="single-div">
                    
                    <div className="single-good">
                        <div className="single-img">
                            <img src={singleOrder.imgUrl} alt={singleOrder.name}/>
                        </div>
                        <div className="single-text">
                            <h1>{singleOrder.name}</h1>
                            <p>{ singleOrder.description }</p>
                            <div className="single-order">
                                <GoHeart className="single-fav" style={{display: favoritOrder === 'noFav' ? 'block' : 'none'}} onClick={() => handleclick('Fav')}/>
                                <GoHeartFill className="single-fav"  style={{display: favoritOrder === 'Fav' ? 'block' : 'none'}} onClick={() => handleclick('noFav')}/>
                                <button className="single-btn">Order</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}