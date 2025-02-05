import React from 'react';
import './Infomation.css';
import member from "./images/member.png";

function Infomation() {
    return (
        <>
            <div id="infomation">
                <div className="infomation__content">
                    <div className="infomation__intro">
                        <h2 className="infomation__intro-head">The Band</h2>
                        <p className="infomation__intro-desc">We love music</p>
                        <p className="infomation__intro-text">
                            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="infomation__members">
                        <div className="infomation__member">
                            <p>Name</p>
                            <img src={member} alt="Image Member" />
                        </div>
                        <div className="infomation__member">
                            <p>Name</p>
                            <img src={member} alt="Image Member" />
                        </div>
                        <div className="infomation__member">
                            <p>Name</p>
                            <img src={member} alt="Image Member" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Infomation;