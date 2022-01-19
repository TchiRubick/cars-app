import React from 'react';

import './Button.scss';

const Button = (props) => {
  const {
    onClick, children, theme, disabled, className,
  } = props;

  const renderClass = () => {
    if (disabled) {
      return 'disabled';
    }

    if (theme) {
      return theme;
    }

    return '';
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className || ''} kit-button __${renderClass()}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
