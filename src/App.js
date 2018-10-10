import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import Navbar from './components/Navbar';

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
