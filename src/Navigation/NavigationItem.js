import React from 'react';

const NavigationItem = (props) => {
  const { url, linkText } = props.navigation;
  return (
    <li>
      <a href={url}>
        {linkText}
      </a>
    </li>
  );
};

export default NavigationItem;
