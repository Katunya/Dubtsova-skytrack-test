import React from 'react';

import './error-indicator.scss';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>Что то пошло не так ...</span>
    </div>
  );
};

export default ErrorIndicator;
