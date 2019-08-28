import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './core/components/Topbar/Topbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './user/pages/SignInPage'
import  './core/consts/ScssToExport.scss'
function App() {
  return (
    <div className = "Background-box">

      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path = '/signin' component = {SignInPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
