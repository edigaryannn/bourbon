import React from "react";

class Header extends React.Component{
    render(){
        return(

            <header>
                <div className="header">
                    <div className="header-nav">

                            <table className="nav-table">
                                <li className="nav-li"><a href="/" className="nav-li-a">Collections</a></li>
                                <li className="nav-li"><a href="/" className="nav-li-a">Brands</a></li>
                                <li className="nav-li"><a href="/" className="nav-li-a">Visit us</a></li>
                            </table>

                    </div>

                    <div className="header-logo">
                        <a href="/" className="logo-a">
                            <img className="logo" src="https://www.hennessy.com/themes/custom/hennessy/assets/images/logo-hennessy-white.png" alt="logo"/>
                        </a>
                    </div>
                    
                    <div className="header-prof">

                    </div>

                </div>
            </header>
            
        );
    }
}

export default Header;