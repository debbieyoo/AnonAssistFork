import React, { Component } from 'react';
import {Router, Route, NavLink} from 'react-router-dom';


export default class Navbar extends React.Component {
    render(){
        var styles = {
            listType: {
                listStyleType: 'none',
                marginTop: '50px',
                fontFamily: "Courier New",
            }
            
        }
        return(
                <ul className='nav' style={Object.assign({}, styles.listType)}> 
                    <li>
                    <NavLink exact activeClassName='active' to='/'>
                    Home 
                    </NavLink>
                    </li>
                    
                    <li> 
                    <NavLink activeClassName='active' to='/bios'> Bios
                    </NavLink>
                    </li>
            
                    <li> 
                    <NavLink activeClassName='active' to='/message'> Message
                    </NavLink>
                    </li>
                </ul>
        );
    }
}
               
