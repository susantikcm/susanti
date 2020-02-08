import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from './routes.paths';

import HomePage from '../../pages/homepage/homepage.component';
import SignUp from '../../pages/signup/signup.component';
import Subscriptions from '../../pages/subscriptions/subscriptions.component';
import Feedback from '../../pages/feedback/feedback.component';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + ROUTES.HOME} component={HomePage} />
                <Route path={process.env.PUBLIC_URL + ROUTES.SIGN_UP} component={SignUp} />
                <Route path={process.env.PUBLIC_URL + ROUTES.SUBSCRIPTIONS} component={Subscriptions} />
                <Route path={process.env.PUBLIC_URL + ROUTES.FEEDBACK} component={Feedback} />
            </Switch>
        );
    }
}

export default Routes;