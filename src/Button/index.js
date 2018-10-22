import React from 'react';
import './index.css';

const Button = (props) => {
  return (
    <button
        className="Button"
        onClick={props.clicked}
      >
      {props.buttonText}
    </button>
  )
};

export default Button;
