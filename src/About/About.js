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
      <div className="left">
        <Text>
          Hello!, I'm Luis.
          An Austinite Living in Tampa, FL.
          I'm currently working as a Front End Developer for Ashley Furniture.
        </Text>
      </div>
      <div className="right">
        <Text>
          I love creating thoughtful front end designs using modern technology.
          I am building innovative and complex user interfaces. 
          I'm currently working on learning react.
          This is a react project and will be continued to be updated, stay tuned.
        </Text>
      </div>
    </div>
  </div>
);

export default About;
