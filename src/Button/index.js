import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        className="Button"
        onClick={this.props.clicked}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
