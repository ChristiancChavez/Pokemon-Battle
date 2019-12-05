import React from 'react';
import PropTypes from 'prop-types';

//Components
import Header from '../Header/Header';

const Home = ({ location:{ pathname } }) => ( 
    <div>
        <Header title={pathname} />
    </div>
)

Home.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Home;
