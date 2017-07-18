import React, { Component } from 'react';
import Login from './Login.js';
import Search from './Search.js';
import Message from './Message.js';
import Car from './Car.js';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Search />
        <Message />
            <div>
                <BrowserRouter> 
                <Route path="/Car" component={Car}></Route>
                </BrowserRouter>
                <a href="Car"> Cars</a>
            </div>
      </div>
      
    );
  }
}