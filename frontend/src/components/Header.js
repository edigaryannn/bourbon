import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import bourbon from "../img/bourbon.png";
import DropDown from "./DropDown.js";
import { useAuthStore } from "../store/authUser.js";


const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const location = useLocation();

    const { logout, user } = useAuthStore();

    const dropDownClick = () => {
        setIsDropDownVisible(!isDropDownVisible);
        const mainElem = document.getElementsByTagName('main')[0];
        if (isDropDownVisible===false) {
            mainElem.style.opacity = '0.3';
        }else{
            mainElem.style.opacity = '1';
        }
    };

    useEffect(() => {
    }, [location]);

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
                    {!user ? <Link to={'/profile'}>Sign in</Link> : <a href="/" onClick={logout}>Logout</a>}                  
                    {user ? <Link to={'/favorites'}>Favorites</Link> : ''}                  
                </div>
                {/* if display screen is small this dropDown will shown up */}
                <div className="nav-drop">
                    <IoReorderThree onClick={dropDownClick} className="nav-drop-icon" />
                </div>
            </div>

                <div className={`nav-dropDown ${isDropDownVisible ? 'navActive' : ''}`}>
                    <ul className="nav-dropUl">
                        <li className="nav-li"><Link to='/Contacts' >Contact us</Link></li>
                        <li className="nav-li"><Link to='/Order' >Order</Link></li>
                        <li className="nav-li"><Link to='/Profile' >Profile</Link></li>
                        
                    </ul>
                </div>
     
        </header>
    );
};

export default Header;
