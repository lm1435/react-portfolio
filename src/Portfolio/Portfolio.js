import React, { Fragment } from 'react';
import './Portfolio.css';
import Text from '../Text/Text';
import portfolioData from './Portfolio.json';
import Toggle from '../Utilities/Toggle';
import Modal from '../Utilities/Modal';

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
        const { image, text, link } = data;
        return (
          <div key={image} className="portfolio-image">
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  {on}
                  <div role="presentation" onClick={toggle} onKeyPress={toggle} target="_blank" rel="noopener noreferrer">
                    <img alt={`${image} logo`} src={require(`./images/${image}.png`)} />
                  </div>
                  {on ? (
                    <Modal on={on} toggle={toggle}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img alt={`${image} logo`} src={require(`./images/${image}.png`)} />
                      </a>
                    </Modal>
                  ) : null }
                </Fragment>
              )}
            </Toggle>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Portfolio;
