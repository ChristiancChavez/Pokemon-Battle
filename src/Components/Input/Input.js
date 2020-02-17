import React from 'react';
//styles
import './Input.scss';

const Input = ({ label, onChange, type, name, pattern, title }) => (
    <div className="input">
        <label>{label}</label>
        <input
            type={type}  
            name={name}
            pattern={pattern} 
            title={title}
            required
            onChange={onChange} 
        />
    </div>
)

export default Input;
