import React, { Component } from 'react';


function NameList(){

    const names = ['bruce', 'tony', 'starck']

    return(
        <div>
            {
names.map((name) => <h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList;