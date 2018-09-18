import React from 'react';
import './Portfolio.css';
import HeaderText from '../Text/HeaderText';
import portfolioData from './Portfolio.json';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <HeaderText text="Portfolio" />
      <div className="portfolio-images-wrapper">
        {portfolioData.data.map((data) => {
          return (
            <div key={data.image} className="portfolio-image">
              <a href={data.link} target="_blank">
                <img alt="logo" src={require(`./images/${data.image}.png`)} />
              </a>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Portfolio;