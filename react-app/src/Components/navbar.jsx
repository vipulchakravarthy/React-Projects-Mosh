import React, { Component } from 'react';


//state less functional component

const NavBar = ({ totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
<a class="navbar-brand" href="#"> Navbar 
    <span className="badge badge-pill badge-secondary">
        {totalCounters}
        </span>

</a>
        
</nav>
     );
}


export default NavBar;