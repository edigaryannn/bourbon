import React, { useState, useEffect } from "react";
import OrderData from '../data/OrderData.js';
import useScrollToTop from "../components/ScrollToTop.js";
import RotateRow from "../components/RotateRow.js";
import { Link } from 'react-router-dom';
import { useAuthStore } from "../store/authUser.js";

// Function to group companies
const groupCompany = (company) => {
    return company.reduce((acc, item) => {
        if (!acc[item.company]) {
            acc[item.company] = [];
        }
        acc[item.company].push(item);
        return acc;
    }, {});
}

export default function Order() {
    const [company, setCompany] = useState({});
    const [transformSizeHennessy, setTransformSizeHennessy] = useState(null);
    const [transformSizeJack, setTransformSizeJack] = useState(null);
    const [transformSizeJameson, setTransformSizeJameson] = useState(null);
    const { user } = useAuthStore();
    console.log(user);
    useEffect(() => {
        const loadCompany = async () => {
            const data = await OrderData();
            setCompany(groupCompany(data));
        };
        loadCompany();
    }, []);

    // scrolltotop function automatically scrolls to the top of every component 
    useScrollToTop();

    const getTransformSize = (brand) => {
        switch (brand) {
            case 'hennessy':
                return transformSizeHennessy;
            case 'jack daniels':
                return transformSizeJack;
            case 'jameson':
                return transformSizeJameson;
            default:
                return null;
        }
    };

    return (
        <main>
            <div className="main-cont">
                <div className="main-heading">
                    <h1>Order</h1>
                </div>
                <div className="colums-cont">
                    {['hennessy', 'jack daniels', 'jameson'].map((brand, index) => (
                        <div className="colums-div" key={index}>
                            <h1>{brand}</h1>
                            <div className="colums-row">
                                <div className="colums-row-div" style={{ transform: `translate(${getTransformSize(brand)})` }}>
                                    {company[brand] && company[brand].map((item) => (
                                        <div className="row-div" key={item.id} id={item.id}>
                                            <div className="row-img">
                                                <img src={item.imgUrl} alt={item.name} />
                                            </div>
                                            <h3>{item.name}</h3>
                                            <Link to={`/single/${item.id}`} ><span className="order-snap">Order</span></Link>
                                        </div>
                                    ))}
                                </div>
                                <RotateRow setTransformSize={
                                    brand === 'hennessy' ? setTransformSizeHennessy :
                                    brand === 'jack daniels' ? setTransformSizeJack :
                                    setTransformSizeJameson
                                } />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
