import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom' 
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation';

function App(){
  return ( 
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/about" exact={true} component={About}/>
      <Route path="/" exact={true} component={Home}/>
    </HashRouter>
  )
}

export default App;