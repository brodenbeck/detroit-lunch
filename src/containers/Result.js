import React, { Component } from 'react';

import Button from '../Button';
import Result from '../Result';

class ReactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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


export default ReactContainer;
