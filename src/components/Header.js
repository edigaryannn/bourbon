import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import bourbon from "../img/bourbon.png";
import DropDown from "./DropDown";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header>
            <div className="header">
                <div className="header-nav">
                    <div className="nav-table">
                        <li
                            className="nav-li"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Brands
                            {isHovered && <DropDown />}
                        </li>
                        <li className="nav-li"><Link to='/Contacts' className="nav-li-a">Contact us</Link></li>
                        <li className="nav-li"><Link to='/Order' className="nav-li-a">Order</Link></li>
                    </div>
                </div>
                <div className="header-logo">
                    <a href="/" className="logo-a">
                        <img className="logo" src={bourbon} alt="logo" />
                    </a>
                </div>
                <div className="header-prof">
                    <Link to={'/profile'}>
                        <CgProfile className="nav-logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
