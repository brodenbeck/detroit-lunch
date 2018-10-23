import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Result = ({ restaurant }) => {
  return (
    <section className="Result">
      <h2 className="Result__heading">{restaurant.name}</h2>
    </section>
  )
}

Result.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Result;
