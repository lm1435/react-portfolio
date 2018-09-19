import React from 'react';
import './Contact.css';
import HeaderText from '../Text/HeaderText';
import Text from '../Text/Text';
import contactData from './Contact.json';


const Contact = (props) => {
  return (
    <div className={props.classname}> 
      <HeaderText color='white' text="Contact" />
      <Text text="Im currently working at Ashley Furniture, building amazing user experiences."/>
      <Text text="Feel free to reach out to me."/>
      <a className="mail" href="mailto:luismeza01@gmail.com?subject=You're AWESOME!, we should connect">Email me</a>
      <div className="contact-images">
        {contactData.data.map((data) => {
            return (
              <a key={data.text} href={data.link} target="_blank" rel="noreferrer">
                <img alt={data.text} src={require(`./images/${data.image}.png`)} />
              </a>
            )
        })}
      </div>
    </div>
  )
}

export default Contact;