import React, { Component } from 'react';

//columns: array
//sortBy: object
//onSort: Function
class TableHeader extends Component {
    state = {  }

    raiseSort = (path) => {
        const sortBy = {...this.props.sortBy}
        if(sortBy.path === path){
            sortBy.order = sortBy.order === 'asc' ? 'desc' : 'asc'
        }
        else{
            sortBy.path = path;
            sortBy.order = 'asc'
        }
        this.props.onSort(sortBy)
    }
    render() { 
        return ( <thead>
            <tr>
                {this.props.columns.map(column => (
                <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>{column.label}</th>))}
            </tr>
        </thead> );
    }
}
 
export default TableHeader;