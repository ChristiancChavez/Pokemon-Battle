import React, { Component } from 'react';
import './LogIn.scss';

class LogIn extends Component {

    state = {
        username: "",
        pokename: "",
        email: "",
        password: "",
    }

    onChange = (e) => {
        this.setState({
          [e.target.name]:e.target.value,
        })
        e.preventDefault();
    }
    render(){
        const { username, pokename, email, password } = this.state;
        return(
            <article className="popup">
                <i onClick={this.toggleButtonPopup}>
                    {/* <FontAwesomeIcon icon={faTimesCircle}  size="6x" /> */}
                    X
                </i>
                <form className="form"  >
                    <h3>SIGNUP</h3>
                    <input
                        name="username" 
                        placeholder="Name" 
                        value={username} 
                        type="text"  autoFocus  
                        pattern="[a-z]{2,15}" 
                        title="Your username must be 2 to 15 in length"
                        required
                        onChange={this.onChange}  
                    />
                    <input
                        name="pokename" 
                        placeholder="PokeName"
                        value={pokename} 
                        type="text"  
                        pattern="[a-z0-9]{2,15}" 
                        title="Your username must be contain one number at least and be 8 to 12 in length" 
                        required
                        onChange={this.onChange} 
                    />
                    <button className="form__button"  type="submit" ></button>
                    <input
                        name="email" 
                        placeholder="E-mail" 
                        value={email} 
                        type="email" 
                        required
                        onChange={this.onChange}  
                    />
                    <input
                        name="password" 
                        placeholder="Password" 
                        value={password} 
                        type="password" 
                        pattern="[A-Za-z0-9]{8,12}" 
                        title="Password must be 8 to 12 in length, has uppercase and lowercase letters and one number at least" 
                        required
                        onChange={this.onChange}  
                    />
                </form>
            </article>
        )
    }
}  

export default LogIn;
