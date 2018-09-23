import React from 'react';
import './Portfolio.css';
import HeaderText from '../Text/HeaderText';
import portfolioData from './Portfolio.json';

const Portfolio = () => (
  <div id="portfolio">
    <HeaderText>
      Portfolio
    </HeaderText>
    <div className="portfolio-images-wrapper">
      {portfolioData.data.map((data) => {
        const { image, link, text } = data;
        return (
          <div key={image} className="portfolio-image">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img alt="logo" src={require(`./images/${image}.png`)} />
            </a>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Portfolio;
