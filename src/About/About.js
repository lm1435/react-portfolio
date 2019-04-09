import React from 'react';
import './About.css';
import Text from '../Text/Text';
import HeaderText from '../Text/HeaderText';

const About = () => (
  <div className="about-me" id="about">
    <HeaderText>
      About Me
    </HeaderText>
    <div className="about-me-text">
        <Text>
          Hello!, I'm Luis.
        </Text>
        <Text>
          I'm currently working as a Front End Developer for Michaels.
        </Text>
        <Text>
          I love creating thoughtful front end designs using modern technology.
        </Text>
        <Text>
          I'm currently building complex user interfaces.
        </Text>
        <Text>
          I'm working on mastering React.
          This is a react project and will be continued to be updated, stay tuned.
        </Text>
    </div>
  </div>
);

export default About;
