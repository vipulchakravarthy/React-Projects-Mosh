import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : this.props.value,
        tags: ["tag1", 'tag2', 'tag3']
      }
    handleIncrement = () =>  {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        
    }


    formatCount = () => {
        return this.state.count> 0 ? this.state.count : "zero" 
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count > 0 ? "primary" : "warning";
        return classes;
    }

    renderTags = () => {
        return this.state.tags.length >  0 ? 
        (<ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>) : (<p>There are no tags</p>)
    }

    render() {     
        console.log(this.props)    
        return ( 
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
        </div> );
    }
}
 
export default Counter;