import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderData from '../data/OrderData.js'; // Assuming OrderData fetches data
import brandArr from '../data/HomeData.js';

const DropDown = () => {
    const [drinks, setDrinks] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
                const data = await OrderData();
                setDrinks(data);
        };

        fetchDrinks();
    }, []);
    useEffect(() => {
        const fetchBrands = async () => {
            const data = await brandArr();
            setBrands(data);
        }
        fetchBrands();
    }, []);

    return (
        <div className="nav-dropdown">
            <div className="nav-dropdown-menu">
                {brands.map((item, index) => (
                    <ul className='drop-ul' key={index}>
                        
                        <Link to={`/brands/${item.id}`} className='drop-ul-a'>{item.brand}</Link>
                        
                            {drinks
                                .filter(drink => drink.company === item.company)
                                .map((drink, idx) => (
                                    <li key={idx} className='drop-li drink'>
                                        <Link to={`/single/${drink.id}`}>{drink.name}</Link>
                                    </li>
                                ))}
                       

                    </ul>
                ))}

            </div>
        </div>
    );
};

export default DropDown;
