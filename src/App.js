import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Infomation from './components/infomation/Infomation';
import Tour from './components/tour/Tour';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import "./components/responsive/Responsive.css";

function App() {
  return (
    <>
      <div id="container">
        <Header />
        <div id="content">
          <Carousel />
          <Infomation />
          <Tour />
          <Contact />
          <div id="map">
            <img src="/images/map.png" alt="Image Map" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
