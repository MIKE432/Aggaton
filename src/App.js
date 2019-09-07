import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignInPage from './user/pages/SignInPage'
import Playground from './playground/Playground'
import LogInPage from './user/pages/LogInPage'
import BottomBar from './mode-common/BottomBar/BottomBar'


import LandingPage from './mode-guest/landing-page/LandingPage'

import Policy from './mode-common/Policy/Policy';
import Terms from './mode-common/Terms/Terms';

import './App.css';
import './core/consts/ScssToExport.scss'

function App() {
    return (
        <>
        <BrowserRouter >
        <Switch >
            <Route exact path='/' component={ LandingPage } />
            <Route exact path='/login' component={LogInPage}/>
            <Route exact path='/signin' component={ SignInPage } /> 
            <Route exact path='/playground' component={ Playground } />
            <Route exact path='/terms' component={ Terms } />
            <Route exact path='/policy' component={ Policy } />
        </Switch>
        <BottomBar />
        </BrowserRouter>
        </>
    );
}

export default App;