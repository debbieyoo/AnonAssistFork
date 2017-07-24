import React, { Component } from 'react';
import {Router, Route, NavLink, Link} from 'react-router-dom';

export default class Home extends React.Component {
    render (){
        var styles = {
            homeDesc: {
                marginRight: '15px',
                position: 'relative',
                left: '5px',
                width: '65%',
                margin: '20px 20px',
                fontFamily: "Courier New", 
                background: "#eee",
                padding: "10px 20px"
            },
            
            doctorTitle: {
                marginRight: '15px',
                margin: '20px 20px',
                position: 'absolute',
                left: '2%',
                width: '15%',
                fontFamily: "Courier New", 
                background: "#eee",
                padding: "25px 20px",
                textAlign: 'center'
            },
            
            psychTitle: {
                marginRight: '15px',
                margin: '20px 20px',
                position: 'absolute',
                left: '26%',
                width: '15%',
                fontFamily: "Courier New", 
                background: "#eee",
                padding: "25px 20px",
                textAlign: 'center'
            },
            
            otherTitle: {
                marginRight: '15px',
                margin: '20px 20px',
                position: 'absolute',
                left: '50%',
                width: '15%',
                fontFamily: "Courier New", 
                background: "#eee",
                padding: "25px 20px",
                textAlign: 'center'
            },
            
            buttonText: {
                backgroundColor: '#3895C4',
                border: 'none',
                color: 'white',
                fontFamily: "Courier New",
                padding: '10px 10px',
                margin: '20px 10px',

            }, 
            
        }
        
        return (
        <div>
            <div style={Object.assign({}, styles.homeDesc)}>
                <p className='homeDesc'> Anon Assist is a messaging app that connects survivors of sexual assault to trusted contacts like verified doctors,counselors, and other survivors. It is meant to be a first-response tool, and our goal is to encourage trusted and helpful support for these individuals in their time of need. </p>
            </div>
            
            <div style={Object.assign({}, styles.doctorTitle)}>
                <h4> Doctors </h4>
                <p> More information on certified M.D.s here. </p>
                <Link className='button' to='/bios' style={Object.assign({}, styles.buttonText)}> See their bios </Link>
            </div>

             <div style={Object.assign({}, styles.psychTitle)}>
                <h4> Psychiatrists </h4>
                <p> More information on certified M.D.s here. </p>
                <Link className='button' to='/bios' style={Object.assign({}, styles.buttonText)}> See their bios </Link>
            </div>
            
            <div style={Object.assign({}, styles.otherTitle)}>
                <h4> Other Survivors </h4>
                <p> More information on other survivors here. </p>
                <Link className='button' to='/bios' style={Object.assign({}, styles.buttonText)}> See their bios </Link>
            </div>
            
           
        </div>
        );
    }
}
