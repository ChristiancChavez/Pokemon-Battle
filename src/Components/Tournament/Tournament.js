
import React from 'react';
//Components
import Header from '../Header/Header';

const Tournament = ({ location:{ pathname }}) => (
    <div>
        <Header title={pathname} />
    </div>
)

export default Tournament;
