import React from 'react';
import './Button.scss';

const Button = ({ text }) => (
    <button className={`btn ${text}`}>{text}</button>
)

export default Button;
