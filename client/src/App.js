import React, { Component } from 'react';
import './App.css';
import ZipCodeEntry from './components/ZipCodeEntry'
import AddressEntry from './components/AddressEntry'

const axios = require('axios');

class App extends Component {
  constructor() {
    super();

    this.state = {
      userZip: "",
      address: "",
      zip: 0,
      city: "",
      state: "",
      showAddress: false,
      status: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  callGetZipInfo = async (targetZip, cb) => {
    // using axios as our html package of choice to hit our server routes. 
    axios.post('/get_zip', {zipCode: targetZip})
    .then(response => {
      cb(response.data)
    })
  };

  callMapIt(searchAddress, searchCity, searchState, searchZip) {
    var url = "https://www.google.com/maps/place/" + 
      searchAddress.replace(/ /gi, "+") + ",+" + 
      searchCity.replace(/ /gi, "+") + ",+" +
      searchState + "+" + 
      searchZip;
    window.open(url, '_blank')
  }
  
  handleChange(event) {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });

    // this section of code will only trigger once the length of the string in the input field hits 5
    if(name === "userZip" && value.length === 5) {
      var temp = Number(value)
      if (isNaN(temp)) {
        // checking to make sure we actually have a number before we submit to the server
        this.setState({status:"Please enter numbers only."})
      }
      else {
        this.setState({zip: temp})
        // call the server and get the city and state for the zip that was entered
        this.callGetZipInfo(temp, zipArray => {
          console.log(zipArray.data)
          if (zipArray.data.length === 0) {
            // if there is no city found for the zip code provided, give a message saying this
            this.setState({
              city: "CITY NOT FOUND",
              state: "NA"
            })
          }
          else {
            zipArray.data.forEach(item => {
              // search through the array of data for the primary address for the zip code and 
              //  place that information into our state. 
              if (item.LocationType === "PRIMARY") {
                this.setState({
                  city: item.City,
                  state: item.State
                })
              }
            })
          }
        })
        this.setState({
          //set the flag in state to show the div with the address 
          showAddress: true,
          })
      }
    }
    else if (name === "userZip" && value.length !== 5){
      // stop displaying the city and state if the zip code does not match 5 digits
      this.setState({
        city: "",
        state: "",
        showAddress: false,
        status: ""
      })
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
              <div className="message">
                {this.state.status}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {this.state.showAddress ? 
                <div> 
                  {this.state.city + ", " + this.state.state}
                </div> : 
                <div></div>}
            </div>
          </div>

          <div className="row">
            <div className="col">
              {this.state.showAddress ? 
                <div> 
                  <AddressEntry 
                    address = {this.state.address}
                    city = {this.state.city}
                    state = {this.state.state}
                    zip = {this.state.zip}
                    handleChange = {this.handleChange}
                    handleClick = {this.callMapIt}
                  />
                </div> : 
                <div></div>}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;


