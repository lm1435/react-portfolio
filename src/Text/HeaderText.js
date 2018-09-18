import React from 'react';
import './HeaderText.css';

const HeaderText = (props) => {
    return (
      <h3 className="header" style={{'color': props.color}}>
        {props.text}
      </h3>
    ) 
}

export default HeaderText;