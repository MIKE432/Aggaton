import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { allRoutes } from './allRoutes';
import NotFoundComponent from './404Component';

const Routes = ({userType}) => {
    return (
        <Switch >
            {
                allRoutes()[userType].map((routeInfo, index) => (
                    <Route {...routeInfo} exact={true} key={index}/>
                ))
            }
            <Route exact={false} component={NotFoundComponent} />
        </Switch>
    );
}

export default Routes