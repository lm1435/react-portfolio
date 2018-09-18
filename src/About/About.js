import React from 'react';
import './About.css';
import Text from '../Text/Text';
import HeaderText from '../Text/HeaderText';

const About = () => {
  return (
    <div className="about-me" id="about">
      <HeaderText text="About Me" />
      <div className="about-me-text">
        <div className="left">
          <Text text="Hello!, I'm Luis." />
          <Text text="An Austinite Living in Tampa, FL" />
          <Text text="I love creating thoughtful front end designs using modern technology." />
        </div>
        <div className="right">
          <Text text={`
            I'm currently working as a Front End Developer for Ashley Furniture. 
            I am building innovative and complex user interfaces. I'm currently working on learning react.
            This is a react project and will be continued to be updated, stay tuned.
          `}/>
        </div>
      </div>
    </div>
  )
}

export default About;