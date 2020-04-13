import React, { Fragment } from 'react';


const AuthenticationBtns = ({ handleIndentification }) => {
    return (
        <Fragment>
            <Button classBtn="transparent" onClick={() => handleIndentification('login')}>login</Button>
            <Button classBtn="blue" onClick={() => handleIndentification('signup')}>signup</Button> 
        </Fragment>
    )
}

export default AuthenticationBtns;

