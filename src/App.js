import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom' 
import About from './routes/About'
import Home from './routes/Home'

function App(){
  return ( 
    <HashRouter>
      <Route path="/about" exact={true} component={About}/>
      <Route path="/" exact={true} component={Home}/>
    </HashRouter>
  )
}

export default App;