import React from 'react';
import './Skills.css';
import Text from '../Text/Text';

const Skills = () => {
  const images = [
    'javascript',
    'react',
    'next',
    'csharp',
    'html',
    'css',
    'azure',
    'sql',
  ];
  return (
    <div className="skill-set" id="skills">
      <Text>{() => <h3>Skills</h3>}</Text>
      <div className="image-wrapper">
        {images.map(image => (
          <div key={image} className="skill-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              alt={`${image} logo`}
              style={{
                maxWidth: '150px',
              }}
              src={require(`./images/${image}.png`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
