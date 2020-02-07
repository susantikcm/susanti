import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from './routes.paths';

import DynamicPage from '../../pages/dynamic-page/dynamic-page.component';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + ROUTES.DYNAMIC_PAGE} component={DynamicPage} />
            </Switch>
        );
    }
}

export default Routes;