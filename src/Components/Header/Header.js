
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'
//Assets
import pokeball from '../../Assets/images/pokeball.png';
//styles
import './Header.scss';


const Header = ({ title, handleIndentification }) => {
   const mainTitle = title.substring(1) || 'Home'; 

    return (
        <section className="header">
            <div className="header-title">
                <h1 className="header-title__name">Pokemon World</h1>
                <img className="header-title__image" src={pokeball} alt="pokeball" />
            </div>
            <nav className="header-nav">
                <a href="/" className="header-nav__link">{mainTitle}</a>
                <a href="/" className="header-nav__link">Tournament</a>
                <a href="/" className="header-nav__link">PokeCards</a>
                <a href="/" className="header-nav__link">PokeAlbum</a>
                <Button classBtn="transparent" onClick={() => handleIndentification('Login')}>login</Button>
                <Button classBtn="blue" onClick={() => handleIndentification('Signup')}>signup</Button>
            </nav>
        </section>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
