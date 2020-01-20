import React, { Component } from 'react';

class Click extends Component {

    clickHandler(){
        console.log("button clicked");
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
         );
    }
}
 
export default Click;