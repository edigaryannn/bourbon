import React from "react";
import brandArr from "../data/HomeData.js";
import { useState, useEffect } from "react";
import useScrollToTop from "../components/ScrollToTop.js";


export default function Contacts() {

const [brands, setBrands] = useState([]);

useEffect(() => {
    const fetchBrands = async () => {
        const data = await brandArr();
        setBrands(data);
    };

    fetchBrands();
}, []);

//scrolltotop function automaticaly scrolls to top of every component 
useScrollToTop();


    return (
        <main>
            <div className="main-cont">
                <div className="main-heading">
                    <h1>Contacts</h1>
                </div>
                <div className="contacts-div">
                    <h2>If you have question or suggestion for us, you can send it here.</h2>
                    <form className="form">
                        <input className="form-input" type="text" placeholder="First-name" required />
                        <input type="text" placeholder="Surname" required />
                        <input type="mail" placeholder="Email" required />
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose brand</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.brand}
                                </option>
                            ))}
                        </select>
                        <textarea placeholder="Enter the messege: " required></textarea>
                        <button className="form-btn">
                            Send Messege
                        </button>

                        <span>You will receive response to your mail within 2-3 days.</span>
                    </form>
                </div>
            </div>
        </main>
    )

}