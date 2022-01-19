import React from 'react';

import './Spinner.scss';

const Spinner = (props) => {
  const { opened } = props;

  if (!opened) {
    return null;
  }

  return (
    <div className="spinner">
      <span className="spinner-inner-1" />
      <span className="spinner-inner-2" />
      <span className="spinner-inner-3" />
      <span className="spinner-inner-4" />
      <span className="spinner-inner-6" />
    </div>
  );
};

export default Spinner;
