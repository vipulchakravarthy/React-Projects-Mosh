import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        tags: ["tag1", 'tag2', 'tag3']
      }

      componentWillUnmount(){
        console.log("unmount called")
      }
      componentDidMount(){
          console.log("mount called")
      }
      componentDidUpdate(){
        console.log("update called")
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
        return ( 
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
        </div> );
    }
}
 
export default Counter;