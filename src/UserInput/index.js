import React from 'react';

import './index.css';

const UserInput = (props) => {
  return (
    <section className="UserInput">
      <div className="Input__wrapper">
        <label className="Input__label">Starting address</label>
        <input
          className="Input"
          defaultValue={props.location}
          onChange={props.updateLocation}
          type="text"
        />
      </div>
      <div className="Input__wrapper Input__wrapper--select">
        <label className="Input__label">How far are you willing to walk?</label>
        <select
          className="Input Input--select"
          defaultValue={props.radius}
          onChange={props.updateRadius}
          type="tel"
        >
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

export default UserInput;
