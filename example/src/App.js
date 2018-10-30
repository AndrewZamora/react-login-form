import React, { Component } from 'react';
import Main from './Main';
import './App.css';
import Navbar from './Navbar';

class App extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;
