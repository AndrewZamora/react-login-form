import React, { Component } from 'react';
import SignUp from './SignUp';

class SignUpPage extends Component {
    render() {
        const onClick = () => {
            this.props.history.push("/");
        };
        return (
            <div>
                <SignUp onClick={onClick} />
            </div>
        );
    }
}

export default SignUpPage;
