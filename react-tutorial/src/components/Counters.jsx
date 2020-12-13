import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <div    >
                <button className="btn btn-primary"onClick={onReset}>Reset</button>
                {counters.map((item, index) => 
                <Counter key={index} counter={item} onDecrement={onDecrement} onIncrement = {onIncrement} selected={true} onDelete= {onDelete}/>)}
            </div>
        );
    }
}

export default Counters;