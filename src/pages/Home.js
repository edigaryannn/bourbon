import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandArr from '../data/HomeData';
import AnimatedText from "../components/AnimatedText";
import useScrollToTop from "../components/ScrollToTop";

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

    // smooth scrolling effect function
// const [scrollPosition, setScrollPosition] = useState(0);
// const [scrollPositionY, setScrollPositionY] = useState(0);

// useEffect(() => {
    
    
//     const onScroll = () => {
//         setScrollPosition(scrollSize);
//     };

//     window.addEventListener('scroll', onScroll);
//     let scrollSize = window.scrollY - 50;
// }, []);

// console.log(window.scrollY);

    useScrollToTop();

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const loadBrands = async () => {
            const data = await brandArr();
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
                            style={{ backgroundImage: `url(${item.backUrl})` }}
                        >
                            <Link to={`/brands/${item.brand}`}>
                                <button className="main-div-but">
                                    Watch Brand
                                </button>
                            </Link>
                            <div className="main-div-text">
                                <h1><AnimatedText text={item.brand} /></h1>
                                <p><AnimatedText text={item.description} /></p>
                            </div>
                        </div>
                    ))
                ))}

                {/* <div className="main-heading">
                    <h1>Other Drinks.</h1>
                </div>
                <div className="nonalc-cont">
                    <div className="nonalc-div">
                        <div className="nonalc-img">
                            <img 
                                src="https://www.saq.com/media/catalog/product/1/5/15298137-1_1707929287.png?optimize=high&fit=bounds&height=&width=&format=jpeg" 
                                alt="Coca x Jack" 
                            />
                        </div>
                        <h2>Coca x Jack</h2>
                        <a href="/"><span>More</span></a>
                    </div>
                    <div className="nonalc-div">
                        <div className="nonalc-img">
                            <img 
                                src="https://spb.luding.ru/upload/resize_cache/iblock/ef8/800_900_0/d3py2o6s2dqh2vd9ur5tww5uuh6s1c81.png" 
                                alt="Pepsi Max" 
                            />
                        </div>
                        <h2>Pepsi Max</h2>
                        <a href="/"><span>More</span></a>
                    </div>
                </div> */}
            </div>
        </main>
    );
}
