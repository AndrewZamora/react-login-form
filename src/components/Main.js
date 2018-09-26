import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/SignUp' component={SignUp}/>
        </Switch>
    </main>
);

export default Main;
