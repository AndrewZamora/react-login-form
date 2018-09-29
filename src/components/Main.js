import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';


class Main extends Component {
    render() {
        const {onSubmit}= this.props;
        return (
            <main>
                <Switch>
                    <Route exact path='/'
                        render={(props) => <LoginPage {...props}  onSubmit={onSubmit} />} />
                    <Route exact path='/SignUp' component={SignUpPage} />
                </Switch>
            </main>
        );

    }
}

export default Main;
