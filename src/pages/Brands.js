import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import brandArr from '../data/HomeData'; // Adjust the import path as needed
import AnimatedText from "../components/AnimatedText";
import useScrollToTop from "../components/ScrollToTop";

export default function Brands() {
    const { id } = useParams();
    const [brand, setBrand] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const fetchBrand = async () => {
            try {
                const data = await brandArr(); // Invoke the async function to get data
                console.log("Fetched data:", data);
                const selectedBrand = data.find(brand => brand.id === parseInt(id));
                console.log("Selected brand:", selectedBrand);
                setBrand(selectedBrand);
            } catch (error) {
                console.error("Error fetching brand data:", error);
                // Handle error state if needed
            }
        };
    
        console.log("ID parameter:", id);
        fetchBrand();
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
                    <h1>{brand.brand}</h1>
                </div>

                {/* Brand section */}
                <div className="brand-div div-element">
                    <div className="brand-text">
                        <h1 className="brand-h1"><AnimatedText text={brand.brand} /></h1>
                        <article className="brand-desc"><AnimatedText text={brand.description} /> </article>
                    </div>
                    <div className="brand-image">
                        <img src={brand.backUrl} alt={brand.brand} />
                    </div>
                </div>

                {/* Additional sections as needed */}
                {/* Example:
                <div className="brand-cont smooth-scroll-element">
                    ...
                </div>
                */}

                {/* Link to order page */}
                <Link to={`/order`}>
                    <button className="main-div-but">
                        Watch Product
                    </button>
                </Link>
            </div>
        </main>
    );
}
