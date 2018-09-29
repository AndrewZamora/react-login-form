import React, { Component } from 'react';
import Login from './Login';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Login onSubmit={this.props.onSubmit}  />
            </div>
        );
    }
}

export default LoginPage;
