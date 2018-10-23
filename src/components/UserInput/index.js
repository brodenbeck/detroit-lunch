import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const UserInput = ({
  location = '28 W Adams Ave, Detroit, MI 48226',
  radius = '805',
  updateLocation,
  updateRadius,
}) => {
  return (
    <section className="UserInput">
      <div className="Input__wrapper">
        <label className="Input__label">Starting address</label>
        <input
          className="Input"
          defaultValue={location}
          onChange={updateLocation}
          type="text"
        />
      </div>
      <div className="Input__wrapper Input__wrapper--select">
        <label className="Input__label">How far are you willing to walk?</label>
        <select
          className="Input Input--select"
          defaultValue={radius}
          onChange={updateRadius}
          type="tel"
        >
          {/* These values are the converted to meters */}
          <option value="403">1/4 mile</option>
          <option value="805">1/2 mile</option>
          <option value="1609">1 mile</option>
          <option value="3219">2 miles</option>
          <option value="4828">3 miles</option>
        </select>
      </div>
    </section>
  )
};

UserInput.propTypes = {
  location: PropTypes.string,
  radius: PropTypes.string,
  updateLocation: PropTypes.func.isRequired,
  updateRadius: PropTypes.func.isRequired,
}

export default UserInput;
