import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="footer-logo">
                        <a href="/" className="footer-logo-a">
                            <img className="footer-logo-img" src="https://www.hennessy.com/themes/custom/hennessy/assets/images/logo-hennessy-white.png" alt="logo"/>
                        </a>
                    </div>
                <h1>THE ABUSE OF ALCOHOL IS DANGEROUS FOR YOUR HEALTH. PLEASE DRINK RESPONSIBLY</h1>
            </footer>
        );
    }
}

export default Footer;