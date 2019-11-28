
import React from 'react';
//Assets
import pokeballs from '../../Assets/images/pokeballs.png';
import pokeball from '../../Assets/images/pokeball.png';
//styles
import './Header.scss';


const Header = ({ title }) => (
    <div className='header'>
        <img className="header__imageHeader" src={pokeball} alt="pokeball" />
        <h1 className="header__title">{title}</h1>
        <img role="button" className='header__imageMenu' src={pokeballs} alt="menu"/>
    </div>
)

export default Header;
