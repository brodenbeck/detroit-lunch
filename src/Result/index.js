import React, { Component } from 'react';

import './index.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { restaurant } = this.props;

    return (
      <section className="Result">
        <h2 className="Result__heading">{restaurant.name}</h2>
      </section>
    );
  }
}

export default Result;
