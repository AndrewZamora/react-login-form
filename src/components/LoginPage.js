import React, { Component } from 'react';
import Login from './Login';

class LoginPage extends Component {
    handleLogin = (event) => {
        // Connect to backend
        alert(`E-mail: ${event.email}, Password: ${event.password}`);
        event.preventDefault();
      }
    render() {
        return (
            <div>
                <Login onSubmit={this.handleLogin}  />
            </div>
        );
    }
}

export default LoginPage;
