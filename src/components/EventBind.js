import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "heyyy "
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler = () => {
        // console.log(this);
        this.setState({
            message:"Bye"
        })
    }
    render() { 
        return ( <div>
            <p>{this.state.message}</p>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>

        </div> );
    }
}
 
export default EventBind;