import React from 'react'
import {Redirect, Switch, Route, Router} from "react-router-dom";

import { history } from './history';

import Dashboard from '../pages/dashboard';
import Login from '../components/login';


const Routes = () => {
  return (
    <Router history={history}>
        <Switch>
            <Route
                exact path='/dashboard'
                component = {Dashboard}
            />
            <Route
                path='/login'
                component={Login}
            />
            <Redirect to="/"/>
        </Switch>
    </Router>
  )
}

export default Routes