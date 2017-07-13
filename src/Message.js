import React, { Component } from 'react';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
      
    /* Create reference to messages in Firebase Database */
    var messagesRef = firebase.database().ref('messages').limitToLast(30);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
      
  }



  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    firebase.database().ref('messages').push( this.input.value );
    this.input.value = ''; // <- clear the input
  }
  
  render() {  
      
  var styles = {
    msgList:{
        color: "#3895C4",
        width: '50%',
        fontSize: 25,
        fontFamily: "Courier New",
        background: "#eee",
        padding: "20px 20px",
        margin: "10px",
        listStyleType: "none",
        position: 'absolute',
        bottom: 100,
    },
    msgInput:{
        width: '30%',
        margin: '20px 20px',
        padding: '5px 10px',
        fontSize: 20,
        fontFamily: "Courier New", 
        position: 'absolute',
        bottom: 50,
    },
    submitButton:{
        backgroundColor: '#3895C4',
        border: 'none',
        color: 'white',
        fontFamily: "Courier New",
        padding: '10px 10px',
        margin: '20px 20px',
        position: 'absolute',
        left: 425,
        bottom: 51,
    }
  }
      
    return (
      <div >
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" placeholder='Message' ref={ msg => this.input = msg } style={Object.assign({}, styles.msgInput)}/>
        <input type="submit" style={Object.assign({}, styles.submitButton)}/>
        <li reversed style={Object.assign({}, styles.msgList)}>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </li>
        </form>
        </div>
    );
  }
}

export default App;