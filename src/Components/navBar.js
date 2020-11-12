import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = (props) => {
    console.log("NavBar - Rendered");
    return ( <div>
        <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <span>{props.onTotalCounters}</span>
         </Navbar>
         </div>  );
}
 
export default NavBar;

