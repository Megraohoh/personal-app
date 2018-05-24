import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Me extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: "Meghan",
      lastName: "Debity",
      cohort: "Day 25",
      address: "Nashville, TN",
      car: "Tardis",
      pet: "Genetically Modified Tiger"
    }
  }
  render() {
    return (
      <div>
        <h3>{this.state.firstName} {this.state.lastName}</h3>
        <h3>{this.state.address}</h3>
        <h4>{this.state.cohort}</h4>
        <h4>{this.state.car}</h4>
        <h4>{this.state.pet}</h4>
      </div>
    );
  }
}

export default Me