import React from "react";
import './Contact.css';

function Contact() {
    return (
        <>
            <div id="contact">
                <div className="contact-content">
                    <h2 className="contact-content-head">Contact</h2>
                    <p className="contact-content-desc">Fan? Drop a note!</p>
                    <div className="contact-infomation">
                        <div className="contact__info">
                            <div className="contact__info-location">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Chicago, US</span>
                            </div>
                            <div className="contact__info-phone">
                                <i className="fa-solid fa-phone"></i>
                                <span>Phone: +00 151515</span>
                            </div>
                            <div className="contact__info-email">
                                <i className="fa-solid fa-envelope"></i>
                                <span>Email: mail@mail.com</span>
                            </div>
                        </div>
                        <div className="contact__info-inputs">
                            <div className="contact__info-input1">
                                <input type="text" name="name" id="" placeholder="Name" />
                                <input type="text" name="email" id="" placeholder="Email" />
                            </div>
                            <div className="contact__info-input2">
                                <input type="text" name="message" id="" placeholder="Message" />
                            </div>
                            <a className="contact__info-btn" href="">Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;