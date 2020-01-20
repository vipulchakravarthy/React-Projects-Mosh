import React, { Component } from 'react';

class Counter extends Component {
    state = {  }

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment() {
        // this.setState(
        //    { count: this.state.count + 1},
        //    () => {
        //        console.log('call back function', this.state.count);
        //    }
        // )

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() { 
        return ( <div>
            <p>count - {this.state.count} </p>
            <button onClick={() => this.incrementFive()}>Increment</button>
        </div> );
    }
}
 
export default Counter;