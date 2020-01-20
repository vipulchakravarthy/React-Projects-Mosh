import React, { Component } from 'react';

class Welcome extends Component {
    state = {  }
    render() {
        
    const {name, id} = this.props;
    return ( <h1>Welcome {name} and ID {id}</h1> );
    }
}
 
export default Welcome;