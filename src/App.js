import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TopBar from './core/components/Topbar/Topbar'
import SignInPage from './user/pages/SignInPage'
import Playground from './playground/Playground'
import BottomBar from './core/components/BottomBar/BottomBar'
import LogInPage from './user/pages/LogInPage'

import './App.css';
import './core/consts/ScssToExport.scss'

function App() {
    return (
        <>
        <BrowserRouter >
        <TopBar />

        <Switch>
          <Route exact path = '/signin' component = {SignInPage}/>
          <Route exact path = '/playground' component = {Playground}/>
          <Route exact path = '/login' component = {LogInPage}/>
        </Switch>
        </BrowserRouter>
        <BottomBar />
        </>
    );
}

export default App;