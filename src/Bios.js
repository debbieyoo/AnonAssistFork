import React, { Component } from 'react';
import {Router, Route, NavLink, Link} from 'react-router-dom';

export default class Bios extends React.Component {
    render (){
        var styles ={
            doctorBio:{
                marginRight: '15px',
                position: 'relative',
                left: '5px',
                width: '65%',
                margin: '20px 20px',
                fontFamily: "Courier New", 
                background: "#eee",
                padding: "20px 20px"
            },
            
            doctorButton :{
                backgroundColor: '#3895C4',
                border: 'none',
                position: 'relative',
                left: '-2%',
                color: 'white',
                fontFamily: "Courier New",
                padding: '10px 10px',
                margin: '20px 10px',
            }
        }
        return (
            <div>            
                <div style={Object.assign({}, styles.doctorBio)}>
                    <h4> Dr Jones </h4>
                    <p> Dr Jones is a certified MD, here are her credentials... </p>
                    <Link className='button' to='/message' style={Object.assign({}, styles.doctorButton)}> Chat with her </Link>
                </div>
                
                  <div style={Object.assign({}, styles.doctorBio)}>
                    <h4> Dr Smith </h4>
                    <p> Dr Smith is a certified MD, here are her credentials... </p>
                    <Link className='button' to='/message' style={Object.assign({}, styles.doctorButton)}> Chat with her </Link>
                </div>

            </div>
        );
    }
}