
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'
//Assets
import pokeball from '../../Assets/images/pokeball.png';
//styles
import './Header.scss';


const Header = ({ title }) => {
   const mainTitle= title.substring(1) || 'Home'; 
   const enterBtn= 'enter'; 

    return (
        <section className="header">
            <div className="header-title">
                <h1 className="header-title__name">Pokemon World</h1>
                <img className="header-title__image" src={pokeball} alt="pokeball" />
            </div>
            <nav className="header-nav">
                <a href="#" className="header-nav__page">{mainTitle}</a>
                <a href="#" className="header-nav__page">Tournament</a>
                <a href="#" className="header-nav__page">PokeCards</a>
                <a href="#" className="header-nav__page">PokeAlbum</a>
                <Button text={enterBtn} />
            </nav>
        </section>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
