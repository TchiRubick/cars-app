import React from 'react';

import './Container.scss';

const Container = (props) => {
  const { children, className } = props;

  return (
    <div className={`kit-container ${className || ''}`}>
      {children}
    </div>
  );
};

export default Container;
