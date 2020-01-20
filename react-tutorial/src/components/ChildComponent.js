import React, { Component } from 'react';


export default function ChildComponent(props){

    return(
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

