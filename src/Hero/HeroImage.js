import React from 'react';
import './HeroImage.css';
import mainImage from './images/homepage.png'

const HeroImage = () => {
    return(
        <div className="hero-image" style={{backgroundImage: "url(" + mainImage + ")"}}>
            <div>
                <h1>
                  Luis Meza
                </h1>
                <h2>
                  Front End Developer
                </h2>
                <p>
                  Pluviophile
                </p>
                <p>
                  Techy
                </p>
            </div>
        </div>
    );
}

export default HeroImage;