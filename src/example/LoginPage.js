import React, { Component } from 'react';
import Login from '../Login.js';

class LoginPage extends Component {
   

    render() {
        const onSubmit = submitInfo => {
            // Connect to backend
            alert(`E-mail: ${submitInfo.email}, Password: ${submitInfo.password}`);
          }

        return (
            <div>
                <Login onSubmit={onSubmit}  />
            </div>
        );
    }
}

export default LoginPage;
