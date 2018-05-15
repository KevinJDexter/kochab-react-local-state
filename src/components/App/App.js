import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Kevin',
        city: 'Plymouth'
      }
    };

    // this.handleChange = this.handleChange.bind(this);

  }

  handleUserChange = (event) => {
    console.log(event);
    this.setState({ user: {
      name: event.target.value,
      city: this.state.user.city 
    }});
  }

  handleCityChange = (event) => {
    this.setState({ user: {
      name: this.state.user.name,
      city: event.target.value 
    }})
  }

  logState = (event) => {
    console.log(this.state.user);
  }

  render() {
    return (
      <div className="App">
        {this.state.user.name} is from {this.state.user.city}
        <input onChange={this.handleUserChange} placeholder="User Name" />
        <input onChange={this.handleCityChange} placeholder="City Name" />
        <button onClick={this.logState}>Submit</button>
      </div>
    );
  }
}

export default App;
