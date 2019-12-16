import React from 'react';
import PropTypes from 'prop-types';
//styles
import './Button.scss';

const Button = ({ text, classBtn }) => (
    <button className={`btn btn--${classBtn}`}>{text}</button>
)

Button.propTypes = {
    text : PropTypes.string.isRequired,
    classBtn : PropTypes.string.isRequired,
}

export default Button;
