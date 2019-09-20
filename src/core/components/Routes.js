import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { allRoutes } from './allRoutes';

const Routes = ({userType}) => {
    return (
        <Switch >
            {
                allRoutes()[userType].map((routeInfo, index) => (
                    <Route {...routeInfo} key={index}/>
                ))
            }
        </Switch>
    );
}

export default Routes