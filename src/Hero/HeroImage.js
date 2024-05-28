import React from 'react';
import './HeroImage.css';
import mainImage from './images/homepage.png';

const HeroImage = () => (
  <div
    className="hero-image"
    id="home"
    style={{ backgroundImage: `url(${mainImage})` }}
  >
    <div>
      <h1>
        Luis Meza
      </h1>
      <h2>
        Software Engineering Leader
      </h2>
      <p>
        Hiking Trail Explorer
      </p>
      <p>
        Tech and Cloud Enthusiast
      </p>
    </div>
  </div>
);

export default HeroImage;
