import React, { Component } from 'react';
import './App.css';
import ZipCodeEntry from './components/ZipCodeEntry'

class App extends Component {
  constructor() {
    super();

    this.state = {
      userZip: "",
      zip: 0,
      city: "",
      state: "",
      showAddress: false,
      status: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });

    console.log(parseInt(value))

    if(name === "userZip" && value.length === 5) {
      let temp = Number(value)
      if (isNaN(temp)) {
        this.setState({status:"Please enter a number."})
      }
      else {
        this.setState({zip: temp})
        this.setState({showAddress: true})
      }
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Address</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <ZipCodeEntry 
                userZip = {this.state.userZip}
                handleChange = {this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


//  <form id="zip-code-form">
// <div className="form-group">
//     <label htmlFor="zip-code">
//         Please Enter a Zip Code :
//     </label>
//     <input 
//         className="form-control form-control-lg"
//         id="userZip"
//         value={this.state.userZip}
//         name="userZip"
//         onChange={this.handleChange}>
//     </input>
// </div>
// </form> 