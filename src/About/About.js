/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react';
import './About.css';
import Text from '../Text/Text';

const About = () => (
  <div className="about-me" id="about">
    <Text>
      {() => (
        <h3>
          About Me
        </h3>
      )}
    </Text>
    <div className="about-me-text">
      <Text>
        {() => (
          <Fragment>
            <p>
              Hello, I'm Luis.
            </p>
            <p>
              I'm currently working as a Software Engineering Manager/Tech Lead at Highland Ag.
            </p>
            <p>
              I love creating innovative applications using modern technology.
            </p>
            <p>
              I'm currently building complex web apps in C# and Angular as well as mentoring a team of 5
            </p>
            <p>
              This is a React project and will be continued to be updated, stay tuned.
            </p>
          </Fragment>
        )}
      </Text>
    </div>
  </div>
);

export default About;
