import React from 'react';

import './InputText.scss';

const InputText = (props) => {
  const {
    icon, label, value, onChange, disabled, state, type, placeholder,
  } = props;

  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return <i className="kit-input__container-icon">{icon}&nbsp;</i>;
  };

  const renderLabel = () => {
    if (!label) {
      return null;
    }

    return <span className="kit-input__label">{label}</span>;
  };

  const getClassName = () => {
    if (!state) {
      return '';
    }

    return state;
  };

  return (
    <div className="kit-input">
      {renderLabel()}
      <div className={`kit-input__container __${getClassName()}`}>
        {renderIcon()}
        <input value={value} onChange={handleChange} type={type || 'text'} className="kit-input__container-field" disabled={disabled} placeholder={placeholder || ''} />
      </div>
    </div>
  );
};

export default InputText;
