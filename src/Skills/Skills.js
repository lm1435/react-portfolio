import React from 'react';
import './Skills.css';
import HeaderText from '../Text/HeaderText';

const Skills = () => {
  const images = ['html', 'css', 'javascript', 'react', 'jquery', 'bootstrap', 'gulp', 'sass'];
	return (
    <div className="skill-set" id="skills">
      <HeaderText>
        Skills
      </HeaderText>
      <div className="image-wrapper">
        {images.map((image) => (
          <div key={image} className="skill-image">
            <img alt="logo" src={require(`./images/${image}.png`)} />
          </div>
        ))
        }
      </div>
    </div>
	);
};

export default Skills;
