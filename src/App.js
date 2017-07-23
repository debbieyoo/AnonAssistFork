import React, { Component } from 'react';
import Login from './Login.js';
import Search from './Search.js';
import Message from './Message.js';
import Navbar from './Navbar.js';
import Bios from './Bios.js';
import Home from './Home.js';
import {BrowserRouter, Route} from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Search />
        <BrowserRouter> 
            <div className='container'>
                <Navbar />
                <Route path="/" component={Navbar}/>
                <Route path="/bios" component={Bios}/>
                <Route path="/message" component={Message}/>
            </div>
        </BrowserRouter>
      </div>
      
    );
  }
}