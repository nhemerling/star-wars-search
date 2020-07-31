import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';

class App extends Component {




  render() {  
    return (
      <main className='App'>
        <Header />
        <Main />
      </main>
    );
  }
}

export default App;