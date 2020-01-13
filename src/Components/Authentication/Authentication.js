import React, { Component } from 'react';
//Components
import Input from '../Input';
import Button from '../Button';
//styles
import './Authentication.scss';

class Authentication extends Component {
    render(){
        return (
            <div className="authentication">
                <div className="authentication__pokeball">
                    <form className="form">
                        <h3>{'title'}</h3>
                        <span className="form__close">X</span>
                        <Input label='Pokename'/>
                        <Input label='E-mail'/>
                        <Input label='Password'/>
                        <Button />
                        <div>
                            <Button />
                            <Button />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Authentication;
