import React, { Component } from 'react';


// function Greet() {
//     return <h1> Heyyy Vipul</h1>
// }

const Greet = props => {
    const {name, id } = props
return (<div><h1>Hello {name} {id}</h1></div>)
 }

export default Greet;