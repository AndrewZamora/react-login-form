import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/SignUp' component={SignUpPage}/>
        </Switch>
    </main>
);

export default Main;
