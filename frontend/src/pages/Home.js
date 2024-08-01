import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText.js";
import useScrollToTop from "../components/ScrollToTop.js";
import { fetchBrandsFromServer } from "../store/authBrand.js";

const groupByBrand = (brands) => {
    return brands.reduce((acc, item) => {
        if (!acc[item.brandName]) {
            acc[item.brandName] = [];
        }
        acc[item.brandName].push(item);
        return acc;
    }, {});
}

export default function Home() {
    useScrollToTop();

    const [brands, setBrands] = useState([]);
    fetchBrandsFromServer();
    useEffect(() => {
        const loadBrands = async () => {
            const data = await fetchBrandsFromServer();
            setBrands(groupByBrand(data));
        };
        loadBrands();
    }, []);



    return (
        <main>
            <div className="main-cont">
                <div className="main-heading">
                    <h1>Home of Drinks.</h1>
                </div>
                {Object.keys(brands).map((brand) => (
                    brands[brand].map((item, index) => (
                        <div
                            key={index}
                            className="main-div"
                            style={{ backgroundImage: `url(${item.backurl})` }}
                        >
                            <Link to={`/brands/${item.id}`} className="main-div-a-btn">
                                <button className="main-div-but">
                                    Watch Brand
                                </button>
                            </Link>
                            <div className="main-div-text">
                                <AnimatedText text={item.brand} type='header' />
                                <AnimatedText text={item.description} maxLength={200} />
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </main>
    );
}
