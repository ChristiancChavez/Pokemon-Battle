import React, { Component } from 'react';
//Components
import Header from '../Header/Header';

class Home extends Component {
    state = {
        title: 'Battle Pokemon'
    }
    render(){
        const { title } = this.state;
        return (
            <div>
                <Header title={title} />
            </div>
        )
    }
}
    

export default Home;