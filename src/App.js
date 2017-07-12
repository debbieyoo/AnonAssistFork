import React, { Component } from 'react';
import Login from './Login.js';
import Search from './Search.js';
import Message from './Message.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Search />
        <Message />
      </div>
    );
  }
}