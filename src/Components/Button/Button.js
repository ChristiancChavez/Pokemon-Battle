import React from 'react';
import PropTypes from 'prop-types';
//styles
import './Button.scss';

const Button = ({ classBtn, ...other }) => <button className={`btn btn--${classBtn}`} {...other} />


Button.propTypes = {
    classBtn : PropTypes.string.isRequired,
}

export default Button;
