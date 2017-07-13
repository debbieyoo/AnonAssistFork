import React, {Component} from 'react';
import * as firebase from 'firebase';
import Message from './Message.js';

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
    var messagesRef = firebase.database().ref('messages');
    var usersRef = messagesRef.child('messsages/users');
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
    //console.log(this.currentUser.value, "username, line 47")
    firebase.database().ref('users').push( this.currentUser.value );
    
}

loginUser(){
    console.log('logging in rn')
    firebase.auth().signInWithEmailAndPassword(this.state.emailText, this.state.passwordText)
    this.setState({currentUser: this.state.emailText})
    firebase.database().ref('users').push(this.currentUser.value);
    //console.log(this.currentUser.value, "currentUser, line 57")
    console.log('Successfully logged in')
}

logoutUser(){
    firebase.auth().signOut()
    this.setState({currentUser: 'Not signed in.'})
    console.log('logged out')
}


  render() {
    var styles = {
        usernameBox:{
            width: '20%',
            margin: '20px 10px',
            padding: '5px 10px',
            fontSize: 15,
            fontFamily: "Courier New", 
    
            position:'relative',
            left: '650px'

        },
        
        loginButton:{
            backgroundColor: '#3895C4',
            border: 'none',
            color: 'white',
            fontFamily: "Courier New",
            padding: '10px 10px',
            margin: '20px 10px',
            position: 'relative',
            right: '30px',
            float: 'right'
            

        }
    }
        
    return (
      <div class="container">
        <div>
         <input
              style={Object.assign({}, styles.usernameBox)}
              onChange={this.onChangePassword.bind(this)}
              id="txtPassword"
              type="password"
              placeholder="Password"
             />
                  
            <input 
              style={Object.assign({}, styles.usernameBox)}
              onChange={this.onChangeEmail.bind(this)}
              id="txtEmail"
              type="email"
              placeholder="Email"
              ref={ name => this.currentUser = name}
              />
                  
        </div>

        <button
          style={Object.assign({}, styles.loginButton)}
          onClick={this.loginUser.bind(this)}
          id="btnLogin"
          class="btn btn-action">
          Log in
        </button>

        <button
          style={Object.assign({}, styles.loginButton)}
          onClick={this.signUpUser.bind(this)}
          id="btnSignUp"
          class="btn btn-secondary">
          Sign Up
        </button>

        <button
          style={Object.assign({}, styles.loginButton)}
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
