import React from 'react';
import './HeroImage.css';
import mainImage from '../images/homepage.png'

const HeroImage = () => {
    return(
        <div className="hero-image" style={{backgroundImage: "url(" + mainImage + ")"}}>
            <div>
                <p>
                    Luis Meza
                </p>
                <p>
                    Front End Developer
                </p>
            </div>
        </div>
    );
}

export default HeroImage