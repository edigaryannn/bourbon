import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component{
    render(){
        return(

            <header>
                <div className="header">
                    <div className="header-nav">

                            <div className="nav-table">
                                <li className="nav-li"><Link to='/Brands' className="nav-li-a">Brands</Link></li>
                                <li className="nav-li"><Link to='/Contacts' className="nav-li-a">Visit us</Link></li>
                                <li className="nav-li"><Link to='/Order' className="nav-li-a">Order</Link></li>
                            </div>

                    </div>

                    <div className="header-logo">
                        <a href="/" className="logo-a">
                            <img className="logo" src="https://www.hennessy.com/themes/custom/hennessy/assets/images/logo-hennessy-white.png" alt="logo"/>
                        </a>
                    </div>
                    
                    <div className="header-prof">
                        <img src="https://www.svgrepo.com/show/170633/profile-user.svg" alt='profile-logo'/>
                    </div>

                </div>
            </header>
            
        );
    }
}

export default Header;