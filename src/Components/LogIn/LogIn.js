import React, { Component } from 'react';
import Button from '../Button';
import './LogIn.scss';

class LogIn extends Component {

    state = {
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
        const { pokename, email, password } = this.state;
        return(
            <article className="popup">
                <div className="pokeball">
                    <form className="form" >
                        <h3>SIGNUP</h3>
                        <span className="form__close" onClick={this.toggleButtonPopup}>X</span>
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
                        <button className="form__button"  type="submit" >Confirm</button>
                        <div className="form__social">
                            <Button text="Sign in Facebook" classBtn="facebook"/>
                            <Button text="Sign in Google " classBtn="google"/>
                        </div>
                    </form>
                </div>
            </article>
        )
    }
}  

export default LogIn;
