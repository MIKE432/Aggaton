import React from 'react';
import './App.css';
import TopBar from './core/components/Topbar/Topbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './user/pages/SignInPage'
import LogInPage from './user/pages/LogInPage'
import { PlayGround } from './Playground'
import  './core/consts/ScssToExport.scss'

function App() {
  return (

      <BrowserRouter>
        <TopBar />
        <Switch>

          <Route exact path = '/signin' component = {SignInPage}/>
          <Route exact path = '/playground' component = {PlayGround}/>
          <Route exact path = '/login' component = {LogInPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
