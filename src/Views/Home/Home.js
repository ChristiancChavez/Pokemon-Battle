import React from 'react';
import PropTypes from 'prop-types';
//Components
import Header from '../../Components/Header/Header';
//styles
import './Home.scss';

const Home = ({ location:{ pathname } }) => ( 
    <section className="home">
        <Header title={pathname} />
    </section>
)

Home.protoTypes = {
    location: PropTypes.object.isRequired,
}

export default Home;
