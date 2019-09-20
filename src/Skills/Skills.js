import React from 'react';
import './Skills.css';
import Text from '../Text/Text';

const Skills = () => {
  const images = ['html', 'css', 'javascript', 'react', 'jquery', 'bootstrap', 'gulp', 'sass'];
  return (
    <div className="skill-set" id="skills">
      <Text>
        {() => (
          <h3>
            Skills
          </h3>
        )}
      </Text>
      <div className="image-wrapper">
        {images.map(image => (
          <div key={image} className="skill-image">
            <img alt={`${image} logo`} src={require(`./images/${image}.png`)} />
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Skills;
