import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Header from '../../Components/Header';
import Authentication from '../../Components/Authentication';
//styles
import './Home.scss';

class Home extends Component { 

    state = {
        identification: '',
        showAuthentication: false,
    }

    handleIndentification = (title) => {
        this.setState({
            identification: title,
            showAuthentication: true,
        })
    };
    render({ location:{ pathname } }) { 
        return (         
            <section className="home">
                <Header title={pathname} />
                <Authentication />
            </section>
        )
    }
}

Home.protoTypes = {
    location: PropTypes.object.isRequired,
}

export default Home;
