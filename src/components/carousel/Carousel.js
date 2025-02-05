import { useState, useEffect } from "react";
import "./Carsousel.css"; // Nhúng CSS riêng cho carousel
// Import hình ảnh từ thư mục src
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
const images = [img1, img2, img3];
function Carousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval); // Cleanup khi component unmount
    }, []);

    return (
        <div className="slides">
            <div className="slide">
                <img src={images[index]} alt={`Image ${index + 1}`} />
                <div className="slide__content">
                    <h2 className="slide__content-head">New York</h2>
                    <p className="slide__content-text">The atmosphere in New York is lorem ipsum.</p>
                </div>
            </div>
        </div>
    );
}


export default Carousel;
