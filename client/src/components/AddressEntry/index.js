import React from 'react';
import "./style.css";

function AddressEntry(props) {
    return(
        <div>
            <div className="form-group">
                <label htmlFor="address">
                    Please Enter a Street Address :
                </label>
                <input 
                    className="form-control form-control-lg"
                    id="address"
                    value={props.address}
                    name="address"
                    onChange={props.handleChange}>
                </input>
            </div>
            <div className="form-group">
                <button
                    className="btn btn-primary"
                    onClick={()=>props.handleClick(props.address, props.city, props.state, props.zip)}>
                Map It!
                </button>
            </div>
        </div>
    )
}

export default AddressEntry;