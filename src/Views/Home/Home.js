import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Header from '../../Components/Header';
import Authentication from '../../Components/Authentication';
//styles
import './Home.scss';

// const Home = ({ location:{ pathname } }) => ( 
//     <section className="home">
//         <Header title={pathname} />
//         <Authentication />
//     </section>
// )

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
        console.log(title);
    };
    render() { 
        const { location:{ pathname } } = this.props;
        const { showAuthentication, identification } = this.state;

        return (         
            <section className="home">
                <Header title={pathname} handleIndentification={this.handleIndentification} />
                {showAuthentication && <Authentication identification={identification} />}
            </section>
        )
    }
}


Home.protoTypes = {
    location: PropTypes.object.isRequired,
}

export default Home;
