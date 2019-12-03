
import React from 'react';
//Components
import Header from '../Header/Header';

const Tournament = ({ ...rest }) => {
    const title = rest.location.pathname.substring(1);
    return (
        <div>
            <Header title={title} />
        </div>
    )
}

export default Tournament;
