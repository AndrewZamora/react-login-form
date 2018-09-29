import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import Navbar from './components/Navbar';



class App extends Component {
    handleSubmit = (event) => {
        // Connect to backend
        console.log(event.target.value)
        alert(`E-mail: ${this.state.email}, Password: ${this.state.password}`);
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
