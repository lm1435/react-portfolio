import React from 'react';
import './HeaderText.css';

const HeaderText = ({ color='', children } ) => 
  <h3 className="header" style={{ 'color': color }}>
    {children}
  </h3>

export default HeaderText;
