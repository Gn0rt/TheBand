import React from "react";
import './Footer.css';

function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer__content">
                    <div className="footer__socials">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="#"><i className="fa-brands fa-snapchat"></i></a>
                    </div>
                    <div className="footer__powered">
                        <p>Powered by <a href="">w3.css</a></p>
                    </div>
                </div>
            </footer>
        </>

    );
}

export default Footer;