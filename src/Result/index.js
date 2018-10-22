import React from 'react';

import './index.css';

const Result = (props) => {
  return (
    <section className="Result">
      <h2 className="Result__heading">{props.restaurant.name}</h2>
    </section>
  )
}

export default Result;
