import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Button from './Button';
import Result from './Result';

/* global google */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      selectedRestaurant: {},
    };
  }

  componentDidMount = () => {
    window.initMap = this.initMap;
    this.loadJS(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`)
  }

  initMap = () => {
    const detroit = {lat: 42.336878, lng: -83.051692};
    const map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
      center: detroit,
      zoom: 15,
    });

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: detroit,
      radius: 805,
      type: ['restaurant'],
    }, this.updateRestaurants);
  }

  loadJS(source) {
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

  updateRestaurants = (data) => {
    this.setState({
      restaurants: data,
      selectedRestaurant: data[Math.floor(Math.random() * data.length)],
    });
  }

  render() {
    return (
      <div className="App">
        <Result
          restaurant={this.state.selectedRestaurant}
        />
        <Button
          buttonText="New Restaurant"
          clicked={this.returnNewRestaurant}
        />
        <div ref="map" style={{height: 0, width: 0}}></div>
      </div>
    );
  }
}

export default App;
