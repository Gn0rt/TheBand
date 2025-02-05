import React from "react";
import "./Header.css"

function Header() {
    return (
        <>
            <header id="header">
                <div className="header__content">
                    <div className="header__options">
                        <ul className="header__lists">
                            <li className="header__item"><a href="#">Home</a></li>
                            <li className="header__item"><a href="#infomation">Band</a></li>
                            <li className="header__item"><a href="#tour">Tour</a></li>
                            <li className="header__item"><a href="#contact">Contact</a></li>
                            <li className="header__item header__item-extend">
                                <a href="#">More</a>
                                <i className="header__down fa-solid fa-caret-down"></i>
                                <ul className="header__dropdown">
                                    <li className="header__dropdown-item"><a href="">Merchandise</a></li>
                                    <li className="header__dropdown-item"><a href="">Extras</a></li>
                                    <li className="header__dropdown-item"><a href="">Media</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="header__find">
                        <a href="">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;