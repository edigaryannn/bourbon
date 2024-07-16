import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import brandArr from '../data/HomeData';
import brandsData from '../data/BrandsData';
import AnimatedText from "../components/AnimatedText";
import useScrollToTop from "../components/ScrollToTop";

export default function Brands() {
    const { id } = useParams();
    const [brand, setBrand] = useState(null); //depends to brandArr
    const [brandData, setBrandData] = useState(null); // depends to brandsData
    const [scrollPosition, setScrollPosition] = useState(0);
    console.log(scrollPosition);

    useEffect(() => {
        const fetchBrand = async () => {
            try {
                const data = await brandArr(); // Invoke the async function to get data
                const selectedBrand = data.find(brands => brands.id === parseInt(id));
                setBrand(selectedBrand);
            } catch (error) {
                console.error("Error fetching brand data:", error);
                // Handle error state if needed
            }
        };
        fetchBrand();
    }, [id]);

    useEffect(() => {
        const fetchBrandData = async () => {
            try {
                const data = await brandsData(); // Invoke the async function to get data
                
                const selectedBrandData = data.find(brandData => brandData.id === parseInt(id));
                setBrandData(selectedBrandData);
                console.log(selectedBrandData);
            } catch (error) {
                console.error("Error fetching brand data:", error);
                // Handle error state if needed
            }
        };
        fetchBrandData();
    }, [id]);
    
    useEffect(() => {
        // Function to handle scroll position
        const scrollChanging = () => {
            setScrollPosition(window.scrollY);
        };

        document.addEventListener('scroll', scrollChanging);

        return () => {
            document.removeEventListener('scroll', scrollChanging);
        };
    }, []);

    // Scroll to top function
    useScrollToTop();

    if (!brand) return <div>Loading...</div>; // Placeholder for loading state

    return (
        <main>
        <div className="main-cont">
            <div className="main-heading">
                <h1>{brandData.brand}</h1>
            </div>

            {/* First brand section */}
            <div className="brand-div smooth-scroll-element">
                <div className="brand-text">
                    <h1 className="brand-h1"><AnimatedText text={brandData.title1} /></h1>
                    <article className="brand-desc"><AnimatedText text={brandData.desc1} /> </article>
                </div>
            </div>

            {/* Second brand section */}
            <div className="brand-cont smooth-scroll-element">
                <div className="brand-div-2">
                </div>
                <div className="brand-text-2">
                    <h1 className="brand-h1"><AnimatedText text={brandData.title2} /></h1>
                    <article className="brand-desc"><AnimatedText text={brandData.desc2} /> </article>
                </div>
            </div>

            {/* Third brand section */}
            <div className="brand-div-3 smooth-scroll-element">
                <div className="brand-text-3">
                    <h1 className="brand-h1"><AnimatedText text={brandData.title3} /></h1>
                    <article className="brand-desc"><AnimatedText text={brandData.desc3} /> </article>
                </div>
                <Link to={`/order`}>
                    <button className="main-div-but">
                        Watch Product
                    </button>
                </Link>
            </div>
        </div>


        <style>
            {`
                .brand-div::before {
                                background-image: url(${brandData.image1});
                                opacity: 0.7;
                            }
            
                .brand-div-2::before {
                                background-image: url(${brandData.image2});
                                opacity: 0.7;
                            }
                                
                .brand-div-3::before {
                                background-image: url(${brandData.image3});
                                opacity: 0.7;
                            }
            `}
        </style>

    </main>
    );
}
