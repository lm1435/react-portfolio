import React, { Fragment } from 'react';
import './Contact.css';
import Text from '../Text/Text';
import contactData from './Contact.json';


const Contact = ({ classname }) => (
  <div className={classname}>
    <Text>
      {() => (
        <h3 style={{ color: 'white' }}>
          Contact
        </h3>
      )}
    </Text>
    <Text>
      {() => (
        <Fragment>
          <p>
            Im currently working at PrimeLending, building amazing web apps.
          </p>
          <p>
            Feel free to reach out to me.
          </p>
        </Fragment>)}
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
);

export default Contact;
