import React from 'react';
import './HeaderText.css';

const HeaderText = (props) => {
  const { color, children } = props;
  return (
    <h3 className="header" style={{ 'color': color }}>
      {children}
    </h3>
  );
};

export default HeaderText;
