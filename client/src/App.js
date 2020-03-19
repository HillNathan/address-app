import React, { Component } from 'react';
import './App.css';
import ZipCodeEntry from './components/ZipCodeEntry'

const axios = require('axios');

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      userZip: "",
      zip: 0,
      city: "",
      state: "",
      showAddress: false,
      status: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  callHomeZip = async () => {
    const response = await fetch('/get_home');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body)
    return body;
  };

  callGetZipInfo = async (targetZip, cb) => {
    let body = {zipCode : targetZip}
    console.log(body)
    axios.post('/get_zip', {zipCode: targetZip})
    .then(response => {
      cb(response.data)
    })
  };
  
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
        // call the server and get the city and state for the zip that was entered
        // this.callHomeZip()
        this.callGetZipInfo(temp, zipArray => {
          console.log(zipArray.data)
          zipArray.data.forEach(item => {
            if (item.LocationType === "PRIMARY") {
              this.setState({
                city: item.City,
                state: item.State
              })
            }
          })
        })
        this.setState({
          showAddress: true,
          })
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

          <div className="row">
            <div className="col">
              <p className="App-intro">{this.state.data}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;


