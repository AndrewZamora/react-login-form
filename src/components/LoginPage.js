import React, { Component } from 'react';
import Login from './Login';

class LoginPage extends Component {
    handleLogin = () => {
        // Connect to backend
        alert(`E-mail: ${event.email}, Password: ${event.password}`);
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
