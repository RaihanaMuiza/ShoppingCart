import React, { Component } from 'react';
import './App.css';
import Counter from './Components/counter';
import Counters from './Components/counters';
import NavBar from './Components/navBar';

class App extends Component {
  state = { 
    counters : [
        {id : 1, Value : 2 },
        {id : 2, Value : 0 },
        {id : 3, Value : 1 },
        {id : 4, Value : 4 },
        {id : 5, Value : 0 },
    ]
  }

  constructor(){
    super();
    console.log('App - Constructor');

  }

  componentDidMount(){
    //perfect place to get data from Server
    //Ajax Call
    //get new data and setState
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const car = [...this.state.counters];
    const indexa = car.indexOf(counter);
    car[indexa] = {...car};
    //console.log(car[indexa]);
    car[indexa].Value++;
    this.setState({counters : car})
}

handleDelete = (counterId) => {
    //console.log("Event Handler Clicked", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters : counters});
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.Value = 0;
        return c;
  })
  this.setState({counters:counters})
}

  render() { 
      console.log('App - rendered');
    return (  
    <React.Fragment>
      <NavBar onTotalCounters = {this.state.counters.filter(c => c.Value > 0).length} />
      <Counters
        counters = {this.state.counters}
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}
        onReset = {this.handleReset}
      />  
    </React.Fragment>
     );  
  }
}
 
export default App;

