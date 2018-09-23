import React from 'react';
import './Contact.css';
import HeaderText from '../Text/HeaderText';
import Text from '../Text/Text';
import contactData from './Contact.json';


const Contact = ({ classname }) => 
  <div className={classname}>
    <HeaderText color="white">
      Contact
    </HeaderText>
    <Text>
      Im currently working at Ashley Furniture, building amazing user experiences.
    </Text>
    <Text>
      Feel free to reach out to me.
    </Text>
    <a className="mail" href="mailto:luismeza01@gmail.com?subject=You're AWESOME!, we should connect">Email me</a>
    <div className="contact-images">
      {contactData.data.map((data) => {
        const { text, link, image } = data;
        return (
          <a key={text} href={link} target="_blank" rel="noopener noreferrer">
            <img alt={text} src={require(`./images/${image}.png`)} />
          </a>
        );
      })
      }
    </div>
  </div>

export default Contact;
