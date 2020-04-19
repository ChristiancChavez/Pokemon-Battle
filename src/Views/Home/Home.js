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
        idBtnIdentification: '',
        users: [],
        pokename: '',
        email: '',
        passwoord: '',
        getUser: {},
        errorPokename: false,
        errorEmail: false,
        errorPassword: false,
        authenticated: false
    }

    componentDidMount = () => {
        localStorage.setItem('updatedUsers', JSON.stringify(this.state.users));
    };
    
    handleChange = (event) => {
        const eventTarget = event.target;
        this.setState({
            [eventTarget.name]: eventTarget.value
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
            authenticated: true
        })
    };

    addUserAuthenticationDataBase = (event) => {
        event.preventDefault();

        const { email, password, pokename, errorEmail, errorPokename, errorPassword } = this.state;
        const retrievedUsers = JSON.parse(localStorage.getItem('updatedUsers'));
        let user;
        console.log(retrievedUsers.length, 'retrievedusers');
        
        if(!retrievedUsers.length){
            user = {
                pokename,
                email,
                password
            };

            retrievedUsers.push(user);
        
            this.setState({
                users: [...this.state.users, user],
            })
            localStorage.setItem('updatedUsers', JSON.stringify(retrievedUsers));
            this.handleCloseIdentification();
        } else {
            retrievedUsers.forEach((userGetted) => {
            
                if(userGetted.pokename === pokename){
                    this.setState({
                        errorPokename: true
                    })
                    
                } else {
                    this.setState({
                        errorPokename: false
                    })
                    user = {
                        pokename,
                    };
                }

                if(userGetted.email === email){
                    this.setState({
                        errorEmail: true
                    })
                } else {
                    this.setState({
                        errorEmail: false
                    })
                    user = {
                        email,
                    };
                }
                if(userGetted.password === password){
                    this.setState({
                        errorPassword: true
                    })
                } else {
                    this.setState({
                        errorPassword: false
                    })
                    user = {
                        password,
                    };
                }
                
            })
            retrievedUsers.push(user);
            
            this.setState({
                users: [...this.state.users, user],
            })

            localStorage.setItem('updatedUsers', JSON.stringify(retrievedUsers));
            if (!errorEmail  && !errorPokename  && !errorPassword  ) {
                this.handleCloseIdentification();
            }
        }
    };

    getUserAuthenticationDataBase = (event) => {
        event.preventDefault();
        const retrievedUpdatedUsers = JSON.parse(localStorage.getItem('updatedUsers'));
        const { users } = this.state;
        const userGetted = users.filter((user) => user)
        this.setState({
            getUser: userGetted,
        }) 
    };
    

    render() { 
        const { location:{ pathname } } = this.props;
        const { showAuthentication, identification, idBtnIdentification, pokename, password, email, errorPokename, errorEmail, errorPassword, authenticated  } = this.state;

        return (         
            <section className="home">
                <Header 
                    title={pathname} 
                    handleIndentification={this.handleIndentification} 
                    authenticated={authenticated}
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
                        errorPokename= {errorPokename}
                        errorEmail = {errorEmail}
                        errorPassword = {errorPassword}
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
