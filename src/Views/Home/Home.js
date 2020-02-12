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
        idBtnIdentification: '',
        users: [],
        pokename: '',
        email: '',
        passwoord: '',
        getUser: {}
    }
    
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    };

    handleIndentification = (title) => {
        this.setState({
            identification: title,
            showAuthentication: true,
        })
        
    };

    handleCloseIdentification = () => {
        this.setState({
            showAuthentication: false,
        })
    };

    addUserAuthenticationDataBase = (event) => {
        event.preventDefault();
        localStorage.setItem('users', JSON.stringify(this.state.users));
        const { email, password, pokename } = this.state;
        const retrievedUsers = JSON.parse(localStorage.getItem('users'));

        const user = {
            pokename,
            password,
            email
        };

        retrievedUsers.push(user);

        localStorage.setItem('updatedUsers', JSON.stringify(retrievedUsers));
        
        this.setState({
            users: [...this.state.users, user],
        })
        // this.handleCloseIdentification();
        
        console.log('hello add');
    };

    getUserAuthenticationDataBase = (event) => {
        event.preventDefault();
        const retrievedUpdatedUsers = JSON.parse(localStorage.getItem('updatedUsers'));
        const { users } = this.state;
        const userGetted = users.filter((user) => user)
        this.setState({
            getUser: userGetted,
        }) 
        
        console.log(retrievedUpdatedUsers, 'localstorage');
    };
    

    render() { 
        const { location:{ pathname } } = this.props;
        const { showAuthentication, identification, idBtnIdentification, pokename, password, email  } = this.state;
        console.log(this.state.pokename,this.state.password,this.state.email,this.state.users);
        return (         
            <section className="home">
                <Header 
                    title={pathname} 
                    handleIndentification={this.handleIndentification} 
                />
                {showAuthentication && 
                    <Authentication 
                        identification={identification} 
                        handleCloseIdentification={this.handleCloseIdentification} 
                        addUserAuthenticationDataBase= {this.addUserAuthenticationDataBase}
                        getUserAuthenticationDataBase={this.getUserAuthenticationDataBase}
                        handleChange={this.handleChange}
                        pokename={pokename}
                        password={password}
                        email={email}
                        idBtnIdentification={idBtnIdentification}
                    />
                }
            </section>
        )
    }
}


Home.protoTypes = {
    location: PropTypes.object.isRequired,
}

export default Home;
