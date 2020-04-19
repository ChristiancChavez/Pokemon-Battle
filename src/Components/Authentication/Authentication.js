import React, { Fragment, Component } from 'react';
//Components
import Input from '../Input';
import Button from '../Button';
import Error from '../ErrorInput';
import StatusConnection from '../StatusConnection';
//styles
import './Authentication.scss';

class Authentication extends Component  {
    state = {
        userID: '',
        loggedStatus: false,
        showApproved: false,

    }
    componentDidMount() {
        window.fbAsyncInit = () => {
            window.FB.init({
              appId      : '1215666585291474',
              xfbml      : true,
              version    : 'v6.0'
            });
            window.FB.Event.subscribe('auth.statusChange', response => 
                this.statusChangeCallback(response)
            );

            this.checkLoginStatus();
        };
        
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };

    statusChangeCallback = (response) => {
        if(response.status === 'connected') {
            this.setState({
                loggedStatus: true,
                userID: response.authResponse.userID
            })
        } else {
            this.setState({
                loggedStatus: false,
            })
        }
    };

    deleteLogStatus = () => {
        const { handleCloseIdentification } = this.props;
        this.setState({loggedStatus: false});
        handleCloseIdentification();
    };

    checkLoginStatus = () => {
        window.FB.getLoginStatus(response =>this.statusChangeCallback(response))
    };

    // FB.login(function(response) {
    //     if (response.status === 'connected') {
    //         // Logged into your webpage and Facebook.
    //     } else {
    //     // The person is not logged into your webpage or we are unable to tell. 
    //     }
    //   }, {scope: 'public_profile,email'});
    render() { 
        const { handleChange, identification, handleCloseIdentification, addUserAuthenticationDataBase, getUserAuthenticationDataBase, password, pokename, email, errorPokename, errorEmail, errorPassword } = this.props;
        const userSignUp = identification !== 'signup';
        const { loggedStatus, showApproved } = this.state;
        const onSubmitFunc = identification === 'login' ? addUserAuthenticationDataBase : getUserAuthenticationDataBase;
    
        return (
            <div className="authentication">
                <div className="authentication__pokeball">
                    <form className="form" onSubmit={onSubmitFunc}>
                        <h3>{identification}</h3>
                        <Button classBtn="close-authentication" onClick={handleCloseIdentification}>X</Button>
                        <Input 
                            label="Pokename" 
                            name="pokename"
                            type="text" 
                            pattern="[a-z0-9]{4,6}"
                            value={pokename}
                            title="Your username must be contain one number at least and be 4 to 6 in length" 
                            onChange={handleChange}
                        />
                        {errorPokename && 
                            <Error name={pokename} />
                        }
                        {userSignUp && 
                            <Fragment>
                                <Input 
                                    label="E-mail" 
                                    type="email"
                                    name="email" 
                                    value={email}
                                    title="Your e-mail must be in the following order: characters@characters.domain"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                    onChange={handleChange}
                                />
                                {errorEmail && 
                                    <Error  name={email} />
                                }
                            </Fragment>
                        }
                        <Input 
                            label="Password" 
                            type="password" 
                            name="password"
                            value={password} 
                            pattern="[a-z0-9]{8,15}"
                            title="Your password must be contain one number at least and be 8 to 15 in length" 
                            onChange={handleChange}
                        />
                        {errorPassword && 
                            <Error  name={password}/>
                        }
                        <Button classBtn="yellow"  type="submit">{identification}</Button>
                        <div className="form__social">
                            {/* <Button classBtn="facebook" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="false">Facebook</Button> */}
                            <div className="  fb-login-button " data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="false" ></div>
                            <Button classBtn="google">Google</Button>
                        </div>
                    </form>
                </div>
                {loggedStatus && 
                    <StatusConnection deleteLogStatus={this.deleteLogStatus} showApproved={showApproved}/>
                }
            </div>
        )
    }
}


  

export default Authentication;

