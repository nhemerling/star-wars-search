import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';
import { Route } from 'react-router-dom';

export default class App extends Component {
  render() {  
    return (
      <div className='App'>
        <Header />
        <Route
          exact path='/'
          component={Main}
        />
      </div>
    );
  }
}