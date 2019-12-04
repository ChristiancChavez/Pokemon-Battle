import React from 'react';

//Components
import Header from '../Header/Header';

const Home = ({ location:{ pathname } }) => ( 
    <div>
        <Header title={pathname} />
    </div>
)

export default Home;
