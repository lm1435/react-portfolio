import React from 'react';
import './HeaderText.css';

const HeaderText = (props) => {
    return (
      <h3 className="header">
        {props.text}
      </h3>
    ) 
}

export default HeaderText;