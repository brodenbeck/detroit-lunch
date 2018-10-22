import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import InputContainer from './containers/Input';
import ResultContainer from './containers/Result';

/* global google */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      selectedRestaurant: {},
      location: {
        lat: 42.336878,
        lng: -83.051692,
      },
    };
  }

  componentDidMount = () => {
    window.initMap = this.initMap;
    this.loadJS(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`)
  }

  initMap = () => {
    const map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
      center: this.state.location,
      zoom: 15,
    });

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: this.state.location,
      radius: 805,
      type: ['restaurant'],
    }, this.updateRestaurants);
  }

  loadJS = (source) => {
    const ref = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = source;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  returnNewRestaurant = () => {
    this.setState({
      selectedRestaurant: this.state.restaurants[Math.floor(Math.random() * this.state.restaurants.length)],
    });
  }

  updateLocation = (data) => {
    this.setState({
      location: {
        lat: data.lat,
        lng: data.lng,
      },
    });
  }

  updateRestaurants = (data) => {
    this.setState({
      restaurants: data,
      selectedRestaurant: data[Math.floor(Math.random() * data.length)],
    });
  }

  render() {
    const { selectedRestaurant } = this.state;

    return (
      <div className="App">
        <h1>Where should I eat?</h1>
        <InputContainer
          clicked={this.updateLocation}
        />
        <ResultContainer
          restaurant={selectedRestaurant}
          clicked={this.returnNewRestaurant}
        />
        <div ref="map" style={{height: 0, width: 0}}></div>
      </div>
    );
  }
}

export default App;
