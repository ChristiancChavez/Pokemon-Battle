import React from 'react';
//styles
import './Input.scss';

const Input = ({ label }) => (
    <div className="input">
        <label>{label}</label>
        <input
            type="text"  
            // pattern="[a-z0-9]{2,15}" 
            // title="Your username must be contain one number at least and be 8 to 12 in length" 
            required
            // onChange={this.onChange} 
        />
    </div>
)

export default Input;
