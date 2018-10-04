import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {

    handleSubmit = (event, submitInfo) => {
        // Connect to backend
        alert(`E-mail: ${submitInfo.email}, Password: ${submitInfo.password}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Main onSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;
