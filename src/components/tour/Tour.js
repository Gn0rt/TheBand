import React from "react";
import './Tour.css'
import city from "./images/city.png"

function Tour() {
    return (
        <>
            <div id="tour">
                <div className="tour__content">
                    <h2 className="tour__content-head">Tour Dates</h2>
                    <p className="tour__content-desc">Remember to book your tickets!</p>
                    <div className="tour__notification">
                        <div className="tour__month">
                            <span>September</span>
                            <span className="tour__month-status"> Sold out</span>
                        </div>
                        <div className="tour__month">
                            <span>October</span>
                            <span className="tour__month-status">Sold out</span>
                        </div>
                        <div className="tour__month">
                            <span>November</span>
                            <span className="tour__month-status no__soldout">3</span>
                        </div>
                    </div>
                    <div className="tour__tickets">
                        <div className="tour__ticket">
                            <img src={city} alt="Image City" />
                            <div className="tour__ticket-content">
                                <h3 className="tour__ticket-content-head">New York</h3>
                                <p className="tour__ticket-content-date">Fri 27 Nov 2016</p>
                                <p className="tour__ticket-content-text">Praesent tincidunt sed tellus ut rutrum sed vitae
                                    justo.</p>
                                <a className="tour__ticket-content-btn" href="">Buy Tickets</a>
                            </div>
                        </div>
                        <div className="tour__ticket">
                            <img src={city} alt="Image City" />
                            <div className="tour__ticket-content">
                                <h3 className="tour__ticket-content-head">New York</h3>
                                <p className="tour__ticket-content-date">Fri 27 Nov 2016</p>
                                <p className="tour__ticket-content-text">Praesent tincidunt sed tellus ut rutrum sed vitae
                                    justo.</p>
                                <a className="tour__ticket-content-btn" href="">Buy Tickets</a>
                            </div>
                        </div>
                        <div className="tour__ticket">
                            <img src={city} alt="Image City" />
                            <div className="tour__ticket-content">
                                <h3 className="tour__ticket-content-head">New York</h3>
                                <p className="tour__ticket-content-date">Fri 27 Nov 2016</p>
                                <p className="tour__ticket-content-text">Praesent tincidunt sed tellus ut rutrum sed vitae
                                    justo.</p>
                                <a className="tour__ticket-content-btn" href="">Buy Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tour;