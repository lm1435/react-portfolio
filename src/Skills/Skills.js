import React from 'react';
import './Skills.css';
import HeaderText from '../Text/HeaderText';

const Skills = () => {
	var images = [ 'html', 'css', 'javascript', 'react', 'jquery', 'bootstrap', 'gulp', 'sass' ];
	return (
    <div className="skill-set" id="skills">
      <HeaderText text="Skills" />
      <div className="image-wrapper">
        {images.map((image) => {
          return (
            <div className="image">
              <img key={image} alt="logo" src={require(`./images/${image}.png`)} />
            </div>
          );
        })}
      </div>
    </div>
	);
};

export default Skills;
