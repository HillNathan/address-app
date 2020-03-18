import React from 'react';
import "./zipCode.css";

function ZipCodeEntry(props) {
    return(
        <div>
            <form id="zip-code-form">
            <div className="form-group">
                <label htmlFor="zip-code">
                    Please Enter a Zip Code :
                </label>
                <input 
                    className="form-control form-control-lg"
                    id="userZip"
                    value={props.userZip}
                    name="userZip"
                    onChange={props.handleChange}>
                </input>
            </div>
            </form>
        </div>
    )
}

export default ZipCodeEntry;
