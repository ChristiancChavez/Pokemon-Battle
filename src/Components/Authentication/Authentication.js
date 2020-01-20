import React, { Component } from 'react';
//Components
import Input from '../Input';
import Button from '../Button';
//styles
import './Authentication.scss';

class Authentication extends Component {
    render(){
        const { identification, handleCloseIdentification } = this.props;
        const userSignUp = identification === 'Signup'? false : true;
        return (
            <div className="authentication">
                <div className="authentication__pokeball">
                    <form className="form">
                        <h3>{identification}</h3>
                        <Button classBtn="close-authentication" onClick={handleCloseIdentification}>X</Button>
                        <Input label='Pokename'/>
                        {userSignUp && <Input label='E-mail'/>}
                        <Input label='Password'/>
                        <Button classBtn="yellow" onClick={handleCloseIdentification}>{identification}</Button>
                        <div className="form__social">
                            <Button classBtn="facebook">Facebook</Button>
                            <Button classBtn="google">Google</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Authentication;
