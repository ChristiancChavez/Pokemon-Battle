
import React, { Component } from 'react';
//Components
import Header from '../Header/Header';

class Tournament extends Component {
    state = {
        title:'Tournament',
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

export default Tournament;