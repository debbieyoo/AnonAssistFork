import React, {Component} from 'react';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJSA7K8zCsgnZ8_Mo9l0dOUYOkGN6ous4",
    authDomain: "anon-assist2.firebaseapp.com",
    databaseURL: "https://anon-assist2.firebaseio.com",
    storageBucket: "anon-assist2.appspot.com",
};
    
firebase.initializeApp(config);   

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: '',
      passwordText: '',
      currentUser: '',
    };
  }

componentWillMount(){
    let usersRef = firebase.database().ref('users');
    usersRef.on('value', snap => {
        console.log(snap.val(), "line 26");
        let username = {text:snap.val(), id: snap.key};
        this.setState({currentUser: this.state.currentUser})
    })
}
onChangeEmail(e) {
    this.setState({emailText: e.target.value})
}

onChangePassword(e) {
    this.setState({passwordText: e.target.value})
}

signUpUser(){
    console.log(this.state.emailText)
    console.log(this.state.passwordText)

    firebase.auth().createUserWithEmailAndPassword(this.state.emailText, this.state.passwordText)
    this.setState({currentUser: this.state.emailText})
    console.log('New account created, and is now signed in.')
    console.log(this.state.currentUser, "currentUser")
    console.log(this.currentUser.value, "username")
    firebase.database().ref('users').push( this.currentUser.value );
    
}

loginUser(){
    console.log('logging in rn')
    firebase.auth().signInWithEmailAndPassword(this.state.emailText, this.state.passwordText)
    this.setState({currentUser: this.state.emailText})
    console.log('Successfully logged in')
}

logoutUser(){
    firebase.auth().signOut()
    this.setState({currentUser: 'Not signed in.'})
    console.log('logged out')
}


  render() {
    return (
      <div class="container">
        <input
          onChange={this.onChangeEmail.bind(this)}
          id="txtEmail"
          type="email"
          placeholder="Email"
          ref={ name => this.currentUser = name}
          />
        
        <input
          onChange={this.onChangePassword.bind(this)}
          id="txtPassword"
          type="password"
          placeholder="Password"/>

        <button
          onClick={this.loginUser.bind(this)}
          id="btnLogin"
          class="btn btn-action">
          Log in
        </button>

        <button
          onClick={this.signUpUser.bind(this)}
          id="btnSignUp"
          class="btn btn-secondary">
          Sign Up
        </button>

        <button
          onClick={this.logoutUser.bind(this)}
          id="btnLogout"
          class="btn btn-action hide">
          Log Out
        </button>

        <ul>{this.state.currentUser}</ul>
        
      </div>
    );
  }
}

export default Login;
