import React from 'react';

//Components
import Header from '../Header/Header';

const Home = ({ ...rest }) => {
    let title = rest.location.pathname;
    if(rest.location.pathname.length <= 1) {
       title = 'Home'
    } 
    return ( 
    <div>
        <Header title={title} />
    </div>)
    
}

export default Home;
