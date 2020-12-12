import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value: 1},
            {id:2, value: 2},
            {id:3, value: 3},
            {id:4, value: 4},
        ]
     }
    render() {
        return (
            <div>
                {this.state.counters.map((item) => <Counter key={item.id} value={item.value} selected={true}/>)}
            </div>
        );
    }
}

export default Counters;