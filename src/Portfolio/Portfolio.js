import React from 'react';
import './Portfolio.css';
import Text from '../Text/Text';
import portfolioData from './Portfolio.json';

const Portfolio = () => (
  <div id="portfolio">
    <Text>
      {() => (
        <h3>
          Portfolio
        </h3>
      )}
    </Text>
    <div className="portfolio-images-wrapper">
      {portfolioData.data.map((data) => {
        const { image, link, text } = data;
        return (
          <div key={image} className="portfolio-image">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img alt={`${image} logo`} src={require(`./images/${image}.png`)} />
            </a>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Portfolio;
