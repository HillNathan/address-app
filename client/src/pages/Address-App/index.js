import React from 'react';
import "./style.css";

function AddressApp(props) {
    return(
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
    )
}

export default AddressApp;