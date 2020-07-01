import React, { Component } from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

const divStyle= {
    display: 'flex', 
    justifyContent: 'center',
    background: 'grey',
    color: 'white', 
}
export class NavBar extends Component {
    
    divStyle= {
        display: 'flex', 
        justifyContent: 'center',
    }
    render() {
        return (
            <div style={divStyle}>
                <SearchBar />
                <Button text="Login" />
                <Button text="Register" />
            </div>
        )
    }
}

export default NavBar
