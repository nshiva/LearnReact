import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './customer';
import MyHeader from './header';

function App() {
  return (
    <div className="App">
       <MyHeader/>
       <Customer/>
    </div>
  );
}

export default App;
