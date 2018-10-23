import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import Result from '../components/Result';

class ResultContainer extends Component {
  render() {
    const { restaurant, clicked } = this.props;

    return (
      <section className="ResultsContainer">
        <Result
          restaurant={restaurant}
        />
        <Button
          buttonText="New Restaurant"
          clicked={clicked}
        />
      </section>
    );
  }
}

ResultContainer.propTypes = {
  clicked: PropTypes.func.isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default ResultContainer;
