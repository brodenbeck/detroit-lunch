import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = ({ buttonText = 'Submit', clicked }) => {
  return (
    <button
        className="Button"
        onClick={clicked}
      >
      {buttonText}
    </button>
  )
};

Button.propTypes = {
  buttonText: PropTypes.string,
  clicked: PropTypes.func.isRequired,
}

export default Button;
