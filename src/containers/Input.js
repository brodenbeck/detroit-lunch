import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import UserInput from '../components/UserInput';

class InputContainer extends Component {
  state = {
    radius: '803',
    location: '28 W. Adams Ave. Detroit, MI 48226',
    locationCoordinates: {
      lat: '',
      lng: '',
    },
  };

  handleLocationUpdate = (event) => {
    // const userInputLocation = event.target.value;
    // translate userInputLocation to lat/long
    this.setState({
      locationCoordinates: {
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
    const { clicked } = this.props;
    const { location, radius } = this.state;

    return (
      <section className="InputContainer">
        <UserInput
          location={location}
          radius={radius}
          updateLocation={this.handleLocationUpdate}
          updateRadius={this.handleRadiusUpdate}
        />
        <Button
          buttonText="Feed me"
          clicked={clicked}
        />
      </section>
    );
  }
}

InputContainer.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default InputContainer;
