
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Header from '../Header/Header';

const Tournament = ({ location:{ pathname }}) => (
    <div>
        <Header title={pathname} />
    </div>
)

Tournament.protoTypes = {
    location: PropTypes.object.isRequired,
}

export default Tournament;
