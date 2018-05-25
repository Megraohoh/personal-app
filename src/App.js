import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './name'
import Cohort from './cohort';
import Address from './address'
import Car from './car'
import Pet from './pet'

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
       return(
         <div>
           <Name firstName = {this.state.firstName} lastName = {this.state.lastName}/>
           {/*   <Name/> <- This way creates static data. It needs to be writable. */}
           <Cohort cohort = {this.state.cohort}/>
           <Address address  = {this.state.address}/>
           <Car car = {this.state.car}/>
           <Pet pet = {this.state.pet}/>
         </div>
       )
     } 
  // render() {
  //   return (
  //     <div>
  //       <h3>{this.state.firstName} {this.state.lastName}</h3>
  //       <h3>{this.state.address}</h3>
  //       <h4>{this.state.cohort}</h4>
  //       <h4>{this.state.car}</h4>
  //       <h4>{this.state.pet}</h4>
  //     </div>
  //   );
  // }
}

export default Me