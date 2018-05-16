import React, { Component } from 'react';

const emptyUser = {
  name: '',
  city: '',
  zip: ''
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: emptyUser,
      userList: []
    }

    // this.handleChange = this.handleChange.bind(this);

  }

  handleChange = propertyName => event => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.newUser);
    this.setState({
      userList: [
        ...this.state.userList,
        this.state.newUser
      ],
      newUser: emptyUser
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newUser.name} onChange={this.handleChange('name')} placeholder="User Name" />
          <input value={this.state.newUser.city} onChange={this.handleChange('city')} placeholder="City Name" />
          <input value={this.state.newUser.zip} onChange={this.handleChange('zip')} placeholder="Zip Code" />
          <input type="submit" value="Click me to submit form!" />
          <p>
            {this.state.newUser.name} is from {this.state.newUser.city}, {this.state.newUser.zip}
          </p>
        </form>
        {/* <ul>
          {this.state.userList.map(user => <li key={user.name}>{user.name} is from {user.city}, {user.zip}</li>)}
        </ul> */}
        {this.state.userList.map(user => <div key={user.name} style={{ textAlign: 'center', border: 'solid black 1px', width: '25%', margin: '5px' }}>
          <h3>{user.name}</h3>
          <p>Home: {user.city}, {user.zip}</p>
        </div>
        )
        }
      </div>
    )
  }

}
export default App;
