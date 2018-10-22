import React, { Component } from 'react';

import Button from '../Button';
import UserInput from '../UserInput';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: '803',
      location: {
        lat: '',
        lng: '',
      },
    };
  }

  handleLocationUpdate = (event) => {
    // const userInputLocation = event.target.value;
    // translate userInputLocation to lat/long
    this.setState({
      location: {
        lat: '', // latitude
        lng: '', // longitude
      },
    });
  }

  handleRadiusUpdate = (event) => {
    this.setState({
      radius: event.target.value,
    });
  }

  render() {
    const { clicked } = this.props.clicked;

    return (
      <section className="InputContainer">
        <UserInput
          updateLocation={this.handleLocationUpdate}
          updateRadius={this.updateRadius}
        />
        <Button
          buttonText="Feed me"
          clicked={clicked}
        />
      </section>
    );
  }
}


export default InputContainer;
