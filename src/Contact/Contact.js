import React from 'react';
import './Contact.css';
import HeaderText from '../Text/HeaderText';
import Text from '../Text/Text';
import contactData from './Contact.json';


const Contact = () => {
  return (
    <div id="contact"> 
      <HeaderText text="Contact" />
      <Text text="Im currently working at Ashley Furniture, building amazing user experiences."/>
      <Text text="Feel free to reach out to me."/>
      <a className="mail" href="mailto:luismeza01@gmail.com?subject=You're AWESOME!, we should connect">Email me</a>
      <div className="contact-images">
        {contactData.data.map((data) => {
            return (
              <a href={data.link}>
                <img key={data.text} alt={data.text} src={require(`./images/${data.image}.png`)} />
              </a>
            )
        })}
      </div>
    </div>
  )
}

export default Contact;