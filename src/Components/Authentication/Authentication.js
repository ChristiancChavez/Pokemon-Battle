import React, { Fragment } from 'react';
//Components
import Input from '../Input';
import Button from '../Button';
import Error from '../Error-Input';
//styles
import './Authentication.scss';

const Authentication = ({ handleChange, identification, handleCloseIdentification, addUserAuthenticationDataBase, getUserAuthenticationDataBase, password, pokename, email, errorPokename, errorEmail, errorPassword })=> {
   
    const userSignUp = identification === 'signup'? false : true;
    const onSubmitFunc = identification === 'login' ? addUserAuthenticationDataBase : getUserAuthenticationDataBase;
    return (
        <div className="authentication">
            <div className="authentication__pokeball">
                <form className="form" onSubmit={onSubmitFunc}>
                    <h3>{identification}</h3>
                    <Button classBtn="close-authentication" onClick={handleCloseIdentification}>X</Button>
                    <Input 
                        label='Pokename' 
                        name='pokename'
                        type='text' 
                        pattern='[a-z0-9]{4,6}'
                        value={pokename}
                        title='Your username must be contain one number at least and be 4 to 6 in length' 
                        onChange={event => handleChange('pokename', event.target.value)}
                    />
                    {errorPokename && 
                        <Error name={pokename} />
                    }
                    {userSignUp && 
                        <Fragment>
                            <Input 
                                label='E-mail' 
                                type='email'
                                name='email' 
                                value={email}
                                title='Your e-mail must be in the following order: characters@characters.domain'
                                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' 
                                onChange={event => handleChange('email', event.target.value)}
                            />
                            {errorEmail && 
                                <Error  name={email} />
                            }
                        </Fragment>
                    }
                    <Input 
                        label='Password' 
                        type='password' 
                        name='password'
                        value={password} 
                        pattern="[a-z0-9]{8,15}"
                        title='Your password must be contain one number at least and be 8 to 15 in length' 
                        onChange={event => handleChange('password', event.target.value)}
                    />
                    {errorPassword && 
                        <Error  name={password}/>
                    }
                    <Button classBtn="yellow"  type="submit">{identification}</Button>
                    <div className="form__social">
                        <Button classBtn="facebook">Facebook</Button>
                        <Button classBtn="google">Google</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}  

export default Authentication;

