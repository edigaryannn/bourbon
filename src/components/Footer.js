import React, { useState, useEffect } from "react";
import brandArr from '../data/HomeData'; // Assuming brandArr is imported correctly
import { PiFacebookLogoBold, PiInstagramLogoBold, PiYoutubeLogoBold, PiXBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Footer() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const loadBrands = async () => {
            const data = await brandArr(); // Assuming brandArr returns an array of objects with 'name' property
            setBrands(data);
        };
        loadBrands();
    }, []);

    return (
        <footer>
            <div className="footer-cont">
                <div className="footer-logo">
                    <a href="/" className="footer-logo-a">
                        <img className="footer-logo-img" src="https://www.hennessy.com/themes/custom/hennessy/assets/images/logo-hennessy-white.png" alt="Hennessy Logo" />
                    </a>
                </div>
                <div className="footer-div">
                    <ul className="footer-brands">
                        {brands.map((item, index) => (
                            <Link to={`brands/${item.brand}`} key={index} ><li className="footer-brand">{item.brand}</li></Link>
                        ))}
                    </ul>
                    <ul className="footer-weblogos">
                        <li><a href="http://facebook.com" target="blank"><PiFacebookLogoBold className="webLogos" /></a></li>
                        <li><a href="http://instagram.com" target="blank"><PiInstagramLogoBold className="webLogos" /></a></li>
                        <li><a href="http://youtube.com" target="blank"><PiYoutubeLogoBold className="webLogos" /></a></li>
                        <li><a href="http://x.com" target="blank"><PiXBold className="webLogos" /></a></li>
                    </ul>
                </div>
                <p>THE ABUSE OF ALCOHOL IS DANGEROUS FOR YOUR HEALTH. PLEASE DRINK RESPONSIBLY</p>
            </div>
        </footer>
    );
}
